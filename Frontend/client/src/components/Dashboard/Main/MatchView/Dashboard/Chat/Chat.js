import React, { Component } from "react";
import Switch from "./Switch";
import MsgInput from "./MsgInput";
import io from "socket.io-client";
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitChatMessage = this.submitChatMessage.bind(this);
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
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({ chatMessage: "" });
  }

  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <p key={chatMessage}>{chatMessage}</p>
    ));

    return (
      <div id="chat">
        <Switch />
        {chatMessages}
        <form onSubmit={this.submitChatMessage}>
          <input value={this.state.value} onChange={this.handleChange}></input>
          <input type="submit" value="Submit" />
        </form>
        {/* <MsgInput 
          submitChatMessages={this.submitChatMessages}
          value={this.state.value}
          handleChange={this.handleChange}
        /> */}
      </div>
    );
  }
}
