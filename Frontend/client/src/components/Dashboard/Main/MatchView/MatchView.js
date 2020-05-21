import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import TabsContainer from "./Tabs/TabsContainer";
import DashboardContainer from "./Dashboard/DashboardContainer";
import "./stylesheet.css";

class MatchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMatch: "",
      error: false,
    };
  }

  async componentDidMount() {
    const username = this.props.userData.username;
    await axios.put("/api/users", { username }).then(res => {
      const matchId = res.data[0].currentMatch.courseId;
      axios.put("/api/match/current", { matchId }).then(res => {
        const currentMatch = res.data[0];
        if (currentMatch === undefined) {
          swal({
            title: "No Current Match",
            text:
              "You're not currently playing in a match! Go to 'New Match' to tee off!",
            icon: "warning",
          });
          this.setState({ error: true });
        } else {
          this.setState({ currentMatch });
        }
      });
    });
  }

  render() {
    if (this.state.error === true) {
      return <Redirect to="/dashboard/matchForm" />;
    }
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
