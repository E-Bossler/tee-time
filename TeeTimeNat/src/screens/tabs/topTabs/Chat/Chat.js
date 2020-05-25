import React, { Component } from "react";
import {
  Divider,
  Input,
  Button,
  Text,
  ListItem,
  Icon
} from "react-native-elements";
import axios from "axios";
import io from "socket.io-client";
import style from "./stylesheet.scss";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true,
      chatMessage: "",
      chatMessages: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitChatMessage = this.submitChatMessage.bind(this);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    const userData = this.props.userData;

    axios
      .put("http://192.168.138.2:7777/api/match/current/getChat", { userData })
      .then(res => {
        const chatMessages = res.data[0].chat;
        this.setState({ chatMessages });
        this.scrollToBottom();
      });
    this.socket = io("http://192.168.138.2:7777");
    this.socket.on("connect", () => console.log("connected"));
    this.socket.on("chat message", msg => {
      axios.put("/api/match/current/getChat", { userData }).then(res => {
        const chatMessages = res.data[0].chat;
        this.setState({ chatMessages });
        this.scrollToBottom();
      });
    });
  }

  handleChange(event) {
    this.setState({
      chatMessage: event.target.value
    });
  }

  submitChatMessage(e) {
    e.preventDefault();
    const userData = this.props.userData;
    const chatMessage = this.state.chatMessage;
    const chatMessageObj = {
      message: this.state.chatMessage,
      messager: userData.username,
      messagerId: userData.id
    };

    axios
      .post("http://192.168.138.2:7777/api/match/current/saveChatMessage", {
        userData,
        chatMessage
      })
      .then(res => {
        this.socket.emit("chat message", this.state.chatMessage);
        this.setState({
          chatMessages: [...this.state.chatMessages, chatMessageObj]
        });
        this.setState({ chatMessage: "" });
      });
    this.scrollToBottom();
  }

  handleUserChange() {
    // const userMsg = this.state.user;
    const lastMsgObj = this.state.chatMessages.pop();
    const user = lastMsgObj.messager;
    if (user === this.props.userData.username) {
      this.setState({ user: true });
    } else {
      this.setState({ user: false });
    }
  }

  render() {
    return (
      <Divider style={style} id="chat-container">
        <Divider id="msg-container">
          <Divider className={this.state.user ? "user-msgs" : "friend-msgs"}>
            {this.state.chatMessages.map((chatMessage, i) => (
              <ListItem key={i} value={chatMessage.id} className="message">
                {chatMessage.messager}

                {chatMessage.message}
              </ListItem>
            ))}
          </Divider>
          <Text
            note="This was a Span Element"
            ref={el => {
              this.messagesEnd = el;
            }}
          />
        </Divider>
        <Divider id="input-container" onSubmit={this.submitChatMessage}>
          <Input
            type="text"
            id="chat-input"
            placeholder="Type your message here..."
            onChange={this.handleChange}
            value={this.state.chatMessage}
          />
          <Button type="submit" id="send-btn">
            send
          </Button>
        </Divider>
      </Divider>
    );
  }
}
