import React, {Component} from 'react';
import {Divider, Text, ListItem} from 'react-native-elements';
import './stylesheet.scss';

class MatchSplash extends Component {
  render() {
    const username = this.props.userData.username;
    const list = this.props.currentMatch.participants;
    const course = this.props.currentMatch.course;
    if (list === undefined || course === undefined) {
      console.log('no props yet...');
      return (
        <Divider>
          <Text>Loading...</Text>
        </Divider>
      );
    } else {
      const players = [];
      for (let i = 0; i < list.length; i++) {
        players.push(list[i].username);
      }
      return (
        <Divider id="match-splash">
          <Text h4>Welcome back to the green, {username}!</Text>
          <Text>Your current course:</Text>
          <Text id="course-name">{course}</Text>
          <Text>Friends on the the field:</Text>
          <Divider>
            {players.map((value, index) => {
              return <ListItem key={index}>{value}</ListItem>;
            })}
          </Divider>
          <Text id="scoreboard-msg">
            Enter your score or track your friend's score using the
            <Text note="This was a Span.">Scoreboard</Text> tab.
          </Text>
          <Text id="chatroom-msg">
            Chat with your friends during the match using the
            <Text note="This was a Span.">Chatroom</Text> tab.
          </Text>
          <Text id="enjoy-msg">Enjoy your match!</Text>
        </Divider>
      );
    }
  }
}

export default MatchSplash;
