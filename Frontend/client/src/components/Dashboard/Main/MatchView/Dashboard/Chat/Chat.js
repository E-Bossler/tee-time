import React, { Component } from "react";
import axios from "axios";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import { v1 as uuidv1 } from "uuid";

import "./stylesheet.css";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true,
      chatMessage: {
        message: "",
        username: "",
      },
      chatMessages: [{}],
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
      chatMessage: {
        username: this.props.username,
        message: event.target.value,
      },
    });
  }

  submitChatMessage(e) {
    e.preventDefault();
    const chatMessage = this.state.chatMessage;
    const chatMessages = this.state.chatMessages;
    console.log(chatMessage);

    axios.post("/api/match/current/saveChatMessage", {});
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({
      chatMessages: [...this.state.chatMessages, chatMessage.message],
    });
    this.setState({ chatMessage: "" });
    this.scrollToBottom();
  }

  render() {
    const uuid = [uuidv1(), uuidv4()];
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <li key={chatMessage.username} className="message">
        <p key={uuid[0]}>{chatMessage.username}</p>
        <p key={uuid[1]}>{chatMessage.message}</p>
      </li>
    ));

    return (
      <div id="chat-container">
        <div id="msg-container">
          <ul className={this.state.user ? "user-msgs" : "friend-msgs"}>
            {chatMessages}
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
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" id="send-btn">
            send
          </button>
        </form>
      </div>
    );
  }
}
