import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./stylesheet.css";

class NavTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreTab: false,
      chatTab: false,
    };
  }

  selectScoreTab() {
    this.setState({ scoreTab: true });
    this.setState({ chatTab: false });
  }

  selectChatTab() {
    this.setState({ scoreTab: false });
    this.setState({ chatTab: true });
  }

  render() {
    return (
      <ul id="tabs-list">
        {/* <li className="nav-tab">
          <Link id="tracker-tab" to="/dashboard/matchView/tracker">
            Course
          </Link>
        </li> */}
        <li
          className={this.state.scoreTab ? "nav-tab selected-tab" : "nav-tab"}
        >
          <Link
            className="nav-link"
            id="score-tab"
            to="/dashboard/matchView/scoreboard"
            onClick={this.selectScoreTab.bind(this)}
          >
            Scoreboard
          </Link>
        </li>
        <li className={this.state.chatTab ? "nav-tab selected-tab" : "nav-tab"}>
          <Link
            className="nav-link"
            id="chat-tab"
            to="/dashboard/matchView/chat"
            onClick={this.selectChatTab.bind(this)}
          >
            Chatroom
          </Link>
        </li>
      </ul>
    );
  }
}

export default NavTabs;
