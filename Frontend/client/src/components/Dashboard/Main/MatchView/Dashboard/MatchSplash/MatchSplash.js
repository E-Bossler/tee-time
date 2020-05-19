import React, { Component } from "react";
// import axios from "axios";
import "./stylesheet.css";

class MatchSplash extends Component {
  render() {
    const username = this.props.userData.username;
    const list = this.props.currentMatch.participants;
    const course = this.props.currentMatch.course;
    if (list === undefined || course === undefined) {
      console.log("no props yet...");
      return(
        <div>
          <p>Loading...</p>
        </div>
      );
    } else {
      const players = [];
      for (let i = 0; i < list.length; i++) {
        players.push(list[i].username);
      }
      return (
        <div id="match-splash">
          <h4>Welcome back to the green, {username}!</h4>
          <p>Your current course:</p>
          <p id="course-name">{course}</p>
          <p>Friends on the the field:</p>
          <ul>
            {players.map((value, index) => {
              return <li 
                key={index}>
                {value}
              </li>
            })}
          </ul>
          <p id="scoreboard-msg">
            Enter your score or track your friend's score using the 
            <span>Scoreboard</span> tab.
          </p>
          <p id="chatroom-msg">
            Chat with your friends during the match using the 
            <span>Chatroom</span> tab.
          </p>
          <p id="enjoy-msg">Enjoy your match!</p>
        </div>
      );
    }
  }
}

export default MatchSplash;
