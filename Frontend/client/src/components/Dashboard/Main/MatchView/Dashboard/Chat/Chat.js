import React, { Component } from "react";
import axios from "axios";
import io from "socket.io-client";
import "./stylesheet.css";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true,
      chatMessage: "",
      chatMessages: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitChatMessage = this.submitChatMessage.bind(this);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  handleUserChange() {
    // const userMsg = this.state.user;
    const lastMsgObj = this.state.chatMessages.pop();
    const user = lastMsgObj.messager;
    if (user === this.props.userData.username) {
      console.log("my message");
      this.setState({ user: true});
    } else {
      console.log("friend's message");
      this.setState({ user: false});
    }
  }

  componentDidMount() {
    const userData = this.props.userData;

    axios.put("/api/match/current/getChat", { userData }).then(res => {
      const chatMessages = res.data[0].chat;
      this.setState({ chatMessages });
      this.handleUserChange();
      this.scrollToBottom();
    });
    this.socket = io("http://192.168.138.2:7777");
    this.socket.on("connect", () => console.log("connected"));
    this.socket.on("chat message", msg => {
      axios.put("/api/match/current/getChat", { userData }).then(res => {
        const chatMessages = res.data[0].chat;
        this.setState({ chatMessages });
        this.handleUserChange();
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
    console.log(chatMessage);
    console.log(this.state.chatMessages);

    axios
      .post("/api/match/current/saveChatMessage", { userData, chatMessage })
      .then(res => {
        this.socket.emit("chat message", this.state.chatMessage);
        this.setState({
          chatMessages: [...this.state.chatMessages, chatMessageObj],
        });
        this.handleUserChange();
        this.scrollToBottom();
        this.setState({ chatMessage: "" });
      });
  }

  render() {
    return (
      <div id="chat-container">
        <div id="msg-container">
          <ul className={this.state.user ? "user-msgs" : "friend-msgs"}>
            {this.state.chatMessages.map((chatMessage, i) => (
              <li 
                key={i} 
                value={chatMessage.id} 
                className="message"
              >
                {chatMessage.messager}
                <br />
                {chatMessage.message}
              </li>
            ))}
          </ul>
          <span
            ref={el => {
              this.messagesEnd = el;
            }}
          ></span>
        </div>
        <form id="input-container" onSubmit={this.submitChatMessage}>
          <input
            type="text"
            id="chat-input"
            placeholder="Type your message here..."
            onChange={this.handleChange}
            value={this.state.chatMessage}
          />
          <button type="submit" id="send-btn">
            send
          </button>
        </form>
      </div>
    );
  }
}
