import React, { Component } from "react";
import "./stylesheet.css";

class MatchSplash extends Component {
  render() {
    const username = this.props.userData.username;
    const list = this.props.currentMatch.participants;
    const course = this.props.currentMatch.course;
    if (list === undefined || course === undefined) {
      console.log("no props yet...");
      return (
        <div className="match-splash">
          <div id="loading-animation">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      );
    } else {
      const players = [];
      for (let i = 0; i < list.length; i++) {
        players.push(list[i].username);
      }
      return (
        <div className="match-splash">
          <div id="splash-data-container">
            <h4>Welcome back to the green, {username}!</h4>
            <p>Current course:</p>
            <p id="course-name">{course}</p>
            <p>Friends on the the field:</p>
            <ul>
              {players.map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            </ul>
            <p id="enjoy-msg">Enjoy your match!</p>
          </div>
        </div>
      );
    }
  }
}

export default MatchSplash;
