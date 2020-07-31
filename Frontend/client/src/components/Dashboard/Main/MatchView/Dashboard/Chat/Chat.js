import React, { Component } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import './stylesheet.css';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitChatMessage = this.submitChatMessage.bind(this);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  };

  componentDidMount() {
    const userData = this.props.userData;

    console.log(userData);

    axios.put('/api/match/current/getChat', { userData }).then(res => {
      const chatMessages = res.data[0].chat;
      this.setState({ chatMessages });
      this.scrollToBottom();
    });
    this.socket = io('http://localhost:9229');
    this.socket.on('connect', () => console.log('connected'));
    this.socket.on('chat message', msg => {
      axios.put('/api/match/current/getChat', { userData }).then(res => {
        const chatMessages = res.data[0].chat;
        this.setState({ chatMessages });
        this.scrollToBottom();
      });
    });
  }

  handleChange(event) {
    this.setState({
      chatMessage: event.target.value,
    });
  }

  submitChatMessage(e) {
    e.preventDefault();
    const userData = this.props.userData;
    const chatMessage = this.state.chatMessage;
    const chatMessageObj = {
      message: this.state.chatMessage,
      messager: userData.username,
      messagerId: userData.id,
    };

    axios
      .post('/api/match/current/saveChatMessage', { userData, chatMessage })
      .then(res => {
        this.socket.emit('chat message', this.state.chatMessage);
        this.setState({
          chatMessages: [...this.state.chatMessages, chatMessageObj],
        });
        this.scrollToBottom();
        this.setState({ chatMessage: '' });
      });
    this.scrollToBottom();
  }

  render() {
    const user = this.props.userData.username;

    return (
      <div id='chat-container'>
        <div id='msg-container'>
          <ul>
            {this.state.chatMessages.map((chatMessage, i) => (
              <li
                key={i}
                value={chatMessage.id}
                className={
                  chatMessage.messager === user ? 'user-msgs' : 'friend-msgs'
                }
              >
                {chatMessage.messager}
                <span className='message'>{chatMessage.message}</span>
              </li>
            ))}
          </ul>
          <span
            ref={el => {
              this.messagesEnd = el;
            }}
          ></span>
        </div>

        <form id='input-container' onSubmit={this.submitChatMessage}>
          <input
            type='text'
            id='chat-input'
            placeholder='Type your message here...'
            onChange={this.handleChange}
            value={this.state.chatMessage}
          />
          <button type='submit' id='send-btn'>
            send
          </button>
        </form>
      </div>
    );
  }
}
