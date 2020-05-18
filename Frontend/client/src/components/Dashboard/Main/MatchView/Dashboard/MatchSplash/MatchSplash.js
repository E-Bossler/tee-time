import React, { Component } from "react";
import axios from "axios";
import "./stylesheet.css";

class MatchSplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      currentMatchName: "",
      currentHole: "",
      currentMatchPlayers: [],
    };
  }

  componentDidMount() {
    const username = this.props.username;
    axios.put("/api/match/current", { username }).then(res => {
      console.log(res);
      const currentMatchName = res.data[0].currentMatch[0].courseName;
      const currentMatchPlayers = res.data[0].currentMatch[0].players;
      // const currentHole = res.data[0].currentMatch[0].holes[0];

      this.setState({ username });
      this.setState({ currentMatchName });
      this.setState({ currentMatchPlayers });
    });
  }

  render() {
    const players = this.state.currentMatchPlayers;
    const username = this.props.username;
    const indexToSplice = players.indexOf(username);
    players.splice(1, indexToSplice);

    return (
      <div id="match-splash">
        <h4>Welcome back to the green, {this.state.username}!</h4>
        <p>Your current course:</p>
        <p id="course-name">{this.state.currentMatchName}</p>
        <p>Friends on the the field:</p>
        <ul>
          {this.state.currentMatchPlayers.map((player, i) => {
            return <li key={i}>{player.username}</li>;
          })}
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
