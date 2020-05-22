import React, { Component } from "react";
import { Divider, Text, ListItem } from "react-native-elements";
import axios from "axios";

class Matches extends Component {
  constructor() {
    super();
    this.state = {
      matches: []
    };
  }

  componentDidMount() {
    axios
      .get("http://192.168.138.2:7777/api/dashboard/userMenu/matches")
      .then(matches => {
        this.setState({ matches });
      });
  }

  render() {
    return (
      <Divider>
        <Text h2>Matches</Text>
        <Divider>
          {this.state.matches.map(match => {
            return <ListItem key={match._id}>{match.course}</ListItem>;
          })}
        </Divider>
      </Divider>
    );
  }
}

export default Matches;
