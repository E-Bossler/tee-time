import React, { Component } from "react";
import axios from "axios";
import CardSelector from "./CardSelector";
import Scorecard from "./Scorecard";
import "./stylesheet.css";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      players: [],
      course: "",
      scorecardView: "",
    };
  }

  getMatchData = username => {
    return axios.put("/api/users", { username });
  };

  componentDidMount() {
    const username = this.props.username;
    this.getMatchData(username).then(res => {
      console.log(res.data);
      const players = res.data[0].currentMatch[0].players;
      const course = res.data[0].currentMatch[0].courseName;

      this.setState({ username: username });
      this.setState({ players: players });
      this.setState({ course: course });
      this.setState({ scorecardView: username });
    });
  }

  handleCardViewChange(event) {
    const radioValue = event.target.value;
    this.setState({ scorecardView: radioValue });
    console.log(this.state.scorecardView);
  }

  render() {
    return (
      <div id="scoreboard">
        <CardSelector
          username={this.props.username}
          players={this.state.players}
          scorecardView={this.state.scorecardView}
          handleCardViewChange={this.handleCardViewChange.bind(this)}
        />
        <Scorecard
          username={this.props.username}
          players={this.state.players}
          course={this.state.course}
          scorecardView={this.state.scorecardView}
          handleCardViewChange={this.handleCardViewChange.bind(this)}
        />
      </div>
    );
  }
}

export default Scoreboard;
