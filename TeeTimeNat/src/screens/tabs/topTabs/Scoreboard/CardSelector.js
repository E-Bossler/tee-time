import React, { Component } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";
import "./stylesheet.scss";

class CardSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
    };

    // this.props.handleCardViewChange.bind(this);
  }

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
            title={username}
            id={username}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            name="scorecard-radio"
            value={username}
            className="scorecard-radio"
            onPress={() => this.props.handleCardViewChange(username)}
            checked={this.state.checked}
          />
        </View>
        {players.map((player, index) => {
          return (
            <View id="radio-group" key={index}>
              <CheckBox
                title={player}
                id={player}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                name="scorecard-radio"
                value={player}
                className="scorecard-radio"
                onPress={() => this.props.handleCardViewChange(player)}
                checked={this.state.checked}
              />
            </View>
          );
        })}
      </View>
    );
  }
}

export default CardSelector;
