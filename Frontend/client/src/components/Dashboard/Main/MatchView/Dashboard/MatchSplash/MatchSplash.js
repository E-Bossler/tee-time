import React, { Component } from "react";
import axios from "axios";
import "./stylesheet.css";

class MatchSplash extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // const list = this.props.currentMatch.participants;
    // console.log(Array.isArray(list));
    return (
      <div id="match-splash">
        <h4>Welcome back to the green, {this.props.userData.username}!</h4>
        <p>Your current course:</p>
        <p id="course-name">{this.props.currentMatch.course}</p>
        <p>Friends on the the field:</p>
        <ul>
          {
            {
              /* this.props.currentMatch.participants.map((player, i) => {
            return <li key={i}>{player.username}</li>;
          }) */
            }
          }
        </ul>
        <p id="scoreboard-msg">
          Enter your score or track your friend's score using the{" "}
          <span>Scoreboard</span> tab.
        </p>
        <p id="chatroom-msg">
          Chat with your friends during the match using the{" "}
          <span>Chatroom</span> tab.
        </p>
        <p id="enjoy-msg">Enjoy your match!</p>
      </div>
    );
  }
}

export default MatchSplash;
