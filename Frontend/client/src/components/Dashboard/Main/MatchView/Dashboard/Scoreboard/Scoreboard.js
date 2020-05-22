import React, { Component } from "react";
import CardSelector from "./CardSelector";
import Scorecard from "./Scorecard";
import "./stylesheet.css";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      players: "",
      course: "",
      scorecardView: this.props.userData.username,
    };
  }

  handleCardViewChange(event) {
    const radioValue = event.target.value;
    this.setState({ scorecardView: radioValue });
  }

  render() {
    const username = this.props.userData.username;
    const course = this.props.currentMatch.course;

    const list = this.props.currentMatch.participants;
    // console.log(list);
    const players = [];
    for (let i = 0; i < list.length; i++) {
      players.push(list[i].username);
    }
    const indexToSplice = players.indexOf(username);
    players.splice(indexToSplice, 1);
    console.log(players);

    if (username === undefined || players === undefined || course === undefined) {
      console.log("waiting for props...");
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div id="scoreboard">
          <CardSelector
            username={username}
            players={players}
            scorecardView={this.state.scorecardView}
            handleCardViewChange={this.handleCardViewChange.bind(this)}
          />
          <Scorecard
            userData={this.props.userData}
            username={username}
            players={players}
            course={course}
            scorecardView={this.state.scorecardView}
            handleCardViewChange={this.handleCardViewChange.bind(this)}
          />
        </div>
      );
    }
  }
}

export default Scoreboard;
