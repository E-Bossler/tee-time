import React, { Component } from "react";
import { View } from "react-native";
import { Checkbox, Text } from "react-native-elements";
import "./stylesheet.css";

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
        <form>
          <View id="radio-group">
            <input
              type="radio"
              id={username}
              name="scorecard-radio"
              value={username}
              className="scorecard-radio"
              onChange={this.props.handleCardViewChange}
            />
            <label htmlFor={username}>
              <span>
                <span />
              </span>
              {username}
            </label>
          </View>
          {players.map((value, index) => {
            return (
              <View id="radio-group" key={index}>
                <input
                  type="radio"
                  id={value}
                  name="scorecard-radio"
                  value={value}
                  className="scorecard-radio"
                  onChange={this.props.handleCardViewChange}
                />
                <label htmlFor={value}>
                  <span>
                    <span />
                  </span>
                  {value}
                </label>
              </View>
            );
          })}
        </form>
      </View>
    );
  }
}

export default CardSelector;
