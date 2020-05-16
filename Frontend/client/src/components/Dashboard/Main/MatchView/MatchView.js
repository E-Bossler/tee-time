import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TabsContainer from "./Tabs/TabsContainer";
import DashboardContainer from "./Dashboard/DashboardContainer";
import "./stylesheet.css";

class MatchView extends Component {
  render() {
    return (
      <div>
        <Router>
          <TabsContainer />
          <Switch>
            <DashboardContainer username={this.props.username} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MatchView;
