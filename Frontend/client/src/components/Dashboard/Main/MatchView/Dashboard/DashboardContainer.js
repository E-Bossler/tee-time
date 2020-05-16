import React, { Component } from "react";
import { Route } from "react-router-dom";
import GolfAPI from "../../../../utils/golfGeniusAPI";
import axios from "axios";
import Tracker from "./Tracker/Tracker";
import Scoreboard from "./Scoreboard/Scoreboard";
import Chat from "./Chat/Chat";
import MatchSplash from "./MatchSplash/MatchSplash";

class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <Route exact path="/dashboard/matchView">
          <MatchSplash
            userData={this.props.userData}
            username={this.props.username}
          />
        </Route>

        <Route path="/dashboard/matchView/tracker">
          <Tracker />
        </Route>

        <Route path="/dashboard/matchView/scoreboard">
          <Scoreboard 
            username={this.props.username}
          />
        </Route>

        <Route path="/dashboard/matchView/chat">
          <Chat userData={this.props.userData} username={this.props.username} />
        </Route>
      </div>
    );
  }
}

export default DashboardContainer;
