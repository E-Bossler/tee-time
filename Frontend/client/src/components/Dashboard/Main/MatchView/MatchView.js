import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import axios from "axios";
import TabsContainer from "./Tabs/TabsContainer";
import DashboardContainer from "./Dashboard/DashboardContainer";
import "./stylesheet.css";

class MatchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMatch: {},
    };
  }

  componentDidMount() {
    const matchId = this.props.userData.currentMatchId;
    console.log(matchId);
    axios.put("/api/match/current", { matchId }).then(res => {
      const currentMatch = res.data[0];
      this.setState({ currentMatch });
    });
  }

  render() {
    return (
      <div>
        <Router>
          <TabsContainer />
          <Switch>
            <DashboardContainer
              userData={this.props.userData}
              username={this.props.username}
              currentMatch={this.state.currentMatch}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MatchView;
