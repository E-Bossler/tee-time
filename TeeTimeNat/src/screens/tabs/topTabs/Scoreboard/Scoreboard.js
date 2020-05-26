import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import CardSelector from "./CardSelector";
import Scorecard from "./Scorecard";
import "./stylesheet.scss";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      players: "",
      course: "",
      scorecardView: this.props.userData.username
    };
  }

  handleCardViewChange(event) {
    const radioValue = event.target.value;
    this.setState({ scorecardView: radioValue });
  }

  render() {
    const username = this.props.userData.username;
    const course = this.props.userData.currentMatch.courseName;
    const playerData = this.props.userData.currentMatch.players;

    const players = [];

    for (let i = 0; i < playerData.length; i++) {
      if (playerData[i].username !== username) {
        players.push(playerData[i].username);
      } else {
        playerData.splice(i, 1);
      }
    }

    if (
      username === undefined ||
      players === undefined ||
      course === undefined
    ) {
      console.log("waiting for props...");
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <>
          <CardSelector
            username={username}
            playerData={playerData}
            scorecardView={this.state.scorecardView}
            handleCardViewChange={this.handleCardViewChange.bind(this)}
          />
          <Scorecard
            userData={this.props.userData}
            playerData={playerData}
            username={username}
            players={players}
            course={course}
            scorecardView={this.state.scorecardView}
            handleCardViewChange={this.handleCardViewChange.bind(this)}
          />
        </>
      );
    }
  }
}

export default Scoreboard;
