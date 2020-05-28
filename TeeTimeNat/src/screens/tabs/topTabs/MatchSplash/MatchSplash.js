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
        <View id="match-splash" style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, marginVertical: 20 }} id="course-name">
            {course}
          </Text>
          <Text style={{ fontSize: 20, marginVertical: 20 }}>
            Friends on the Field:
          </Text>
          <View style={{ width: "100%", marginBottom: 10 }}>
            {players.map(player => {
              return (
                <ListItem
                  subtitle={player.username}
                  subtitleStyle={{
                    fontSize: 20,
                    color: "rgb(100, 200, 100)",
                    textAlign: "center"
                  }}
                  id="ListItem"
                  key={player.id}
                />
              );
            })}
          </View>

          <Text style={{ marginTop: 50, fontSize: 20 }} id="enjoy-msg">
            Enjoy your match!
          </Text>
        </View>
      );
    }
  }
}

export default MatchSplash;
