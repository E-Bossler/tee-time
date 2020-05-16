import React, { Component } from "react";
import axios from "axios";

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
    console.log(this.props.username);
    axios.put("/api/match/current", { username }).then(res => {
      console.log(res.data);
      const currentMatchName = res.data[0].currentMatch[0].courseName;
      const currentMatchPlayers = res.data[0].currentMatch[0].players;
      const currentHole = res.data[0].currentMatch[0].holes[0];

      this.setState({ username });
      this.setState({ currentMatchName });
      this.setState({ currentMatchPlayers });
      this.setState({ currentHole });
      console.log(this.state);
    });
  }

  render() {
    return (
      <>
        <h2>Current Match</h2>;<h3>{this.state.currentMatchName}</h3>
        <br></br>
        <h4>Welcome back to the green, {this.state.username}!</h4>
        <br></br>
        <h3>Friends on the the field:</h3>
        <ul>
          {this.state.currentMatchPlayers.map((player, i) => {
            return <li key={i}>{player}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default MatchSplash;
