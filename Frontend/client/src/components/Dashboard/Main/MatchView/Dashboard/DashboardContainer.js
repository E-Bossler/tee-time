import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Tracker from "./Tracker/Tracker";
import Scoreboard from "./Scoreboard/Scoreboard";
import Chat from "./Chat/Chat";
import MatchSplash from "./MatchSplash/MatchSplash";

class DashboardContainer extends Component {
  render() {
    // console.log(this.props.currentMatch);
    return (
      <div>
        <Route exact path="/dashboard/matchView">
          <MatchSplash
            currentMatch={this.props.currentMatch}
            userData={this.props.userData}
          />
        </Route>

        {/* <Route path="/dashboard/matchView/tracker">
          <Tracker />
        </Route> */}

        <Route path="/dashboard/matchView/scoreboard">
          <Scoreboard
            currentMatch={this.props.currentMatch}
            userData={this.props.userData}
          />
        </Route>

        <Route path="/dashboard/matchView/chat">
          <Chat
            currentMatch={this.props.currentMatch}
            userData={this.props.userData}
          />
        </Route>
      </div>
    );
  }
}

export default DashboardContainer;
