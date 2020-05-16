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

  componentDidMount() {
    axios.put();
    this.socket = io("http://192.168.138.2:7777");
    this.socket.on("connect", () => console.log("connected"));
    this.socket.on("chat message", msg => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
    this.scrollToBottom();
  }

  handleChange(event) {
    this.setState({
      chatMessage: event.target.value,
    });
  }

  submitChatMessage(e) {
    e.preventDefault();
    const chatMessage = this.state.chatMessage;

    // axios.post("/api/match/current/saveChatMessage", {});
    // this.socket.emit("chat message", this.state.chatMessage);
    this.setState({
      chatMessages: [...this.state.chatMessages, chatMessage],
    });

    this.scrollToBottom();
    this.setState({ chatMessage: "" });
  }

  render() {
    const userData = this.props.userData;

    return (
      <div id="chat-container">
        <div id="msg-container">
          <ul className={this.state.user ? "user-msgs" : "friend-msgs"}>
            {this.state.chatMessages.map((chatMessage, i) => (
              <li key={i} value={userData.id} className="message">
                {chatMessage}
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
