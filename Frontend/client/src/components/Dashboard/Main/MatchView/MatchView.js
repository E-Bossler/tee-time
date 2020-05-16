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
      friends: [],
    };
  }

  componentDidMount() {
    const username = this.props.username;
    axios.put("/api/dashboard/matchView/friends", { username }).then(res => {
      console.log(res.data);
    });
  }

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
