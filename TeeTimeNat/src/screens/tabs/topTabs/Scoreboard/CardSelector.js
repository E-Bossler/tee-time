import React, { Component } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";
import "./stylesheet.scss";

class CardSelector extends Component {
  render() {
    const username = this.props.username;
    const playerData = this.props.playerData;

    const players = [];

    for (let i = 0; i < playerData.length; i++) {
      if (playerData[i].username !== username) {
        players.push(playerData[i].username);
      } else {
        playerData.splice(i, 1);
      }
    }

    return (
      <View id="card-selector">
        <View id="radio-group">
          <CheckBox
            label={username}
            type="radio"
            id={username}
            name="scorecard-radio"
            value={username}
            className="scorecard-radio"
            checked={this.props.handleCardViewChange}
          />
        </View>
        {players.map((value, index) => {
          return (
            <View id="radio-group" key={index}>
              <CheckBox
                type="radio"
                label={value}
                id={value}
                name="scorecard-radio"
                value={value}
                className="scorecard-radio"
                checked={this.props.handleCardViewChange}
              />
            </View>
          );
        })}
      </View>
    );
  }
}

export default CardSelector;
