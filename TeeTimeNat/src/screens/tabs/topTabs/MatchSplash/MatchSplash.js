import React, { Component } from "react";
import { Text, ListItem } from "react-native-elements";
import { View } from "react-native";

class MatchSplash extends Component {
  render() {
    // const username = this.props.userData.username;
    const user = this.props.userData.username;
    const list = this.props.userData.currentMatch.players;
    const course = this.props.userData.currentMatch.courseName;

    if (list === undefined || course === undefined) {
      console.log("no props yet...");
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      const players = [];
      for (let i = 0; i < list.length; i++) {
        players.push(list[i]);
      }
      return (
        <View id="match-splash" style={{ justifyContent: "column" }}>
          <Text h4>Welcome back to the green, {user}!</Text>
          <Text>Current course:</Text>
          <Text id="course-name">{course}</Text>
          <Text>Friends on the Field:</Text>
          <View>
            {players.map(player => {
              return (
                <ListItem
                  subtitle={player.username}
                  id="ListItem"
                  key={player._id}
                />
              );
            })}
          </View>
          <Text id="scoreboard-msg">
            Enter your score or track your friend's score using the
            <Text note="This was a Span.">Scoreboard</Text>
          </Text>
          <Text id="chatroom-msg">
            Chat with your friends during the match using the
            <Text note="This was a Span.">Chatroom</Text>
          </Text>
          <Text id="enjoy-msg">Enjoy your match!</Text>
        </View>
      );
    }
  }
}

export default MatchSplash;
