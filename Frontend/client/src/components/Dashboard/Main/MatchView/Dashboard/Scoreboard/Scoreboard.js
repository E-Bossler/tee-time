import React, { Component } from 'react';
import CardSelector from './CardSelector';
import Scorecard from './Scorecard';
import './stylesheet.css';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      players: '',
      course: '',
      scorecardView: this.props.userData.username,
    };
  }

  handleCardViewChange(event) {
    const radioValue = event.target.value;
    this.setState({ scorecardView: radioValue });
  }

  render() {
    console.log(this.props.userData);
    console.log(this.props.currentMatch);

    const username = this.props.userData.username;
    const course = this.props.currentMatch.course;
    const playerData = this.props.currentMatch.participants;

    const players = [];

    console.log('score course', course);

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
      console.log('waiting for props...');
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div id='scoreboard'>
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
        </div>
      );
    }
  }
}

export default Scoreboard;
