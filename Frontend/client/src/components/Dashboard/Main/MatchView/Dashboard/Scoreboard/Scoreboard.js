import React, { Component } from "react";
import CardSelector from "./CardSelector";
import Scorecard from "./Scorecard";
import "./stylesheet.css";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: "",
      // players: [],
      // course: "",
      scorecardView: this.props.userData.username,
    };
  }

  handleCardViewChange(event) {
    const radioValue = event.target.value;
    this.setState({ scorecardView: radioValue });
    console.log(this.state.scorecardView);
  }

  render() {
    const username = this.props.userData.username;
    const list = this.props.currentMatch.participants;
    const players = [];
    for (let i = 0; i < list.length; i++) {
      players.push(list[i].username);
    }
    const course = this.props.currentMatch.course;

    if (username === undefined || list === undefined || course === undefined) {
      console.log("waiting for props...");
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } else {
      console.log(username, list, players, course);

      return (
        <div id="scoreboard">
          <CardSelector
            username={username}
            players={players}
            scorecardView={this.state.scorecardView}
            handleCardViewChange={this.handleCardViewChange.bind(this)}
          />
          <Scorecard
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
