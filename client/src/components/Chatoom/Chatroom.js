import React, { Component } from "react";
import io from "socket.io-client";
export default class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.submitChatMessage.bind(this);
  }

  componentDidMount() {
    this.socket = io("http://192.168.138.2:7777");
    this.socket.on("connect", () => console.log("connected"));
    this.socket.on("chat message", msg => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
  }

  handleChange(event) {
    this.setState({ chatMessage: event.target.value });
  }

  submitChatMessage(e) {
    e.preventDefault();
    this.io.emit("chat message", this.state.chatMessage);
    this.setState({ chatMessage: "" });
  }

  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <p key={chatMessage}>{chatMessage}</p>
    ));

    return (
      <>
        {chatMessages}
        <form onSubmit={this.submitChatMessage}>
          <input
            value={this.state.value}
            onChange={chatMessage => {
              this.setState({ chatMessage });
            }}
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}
