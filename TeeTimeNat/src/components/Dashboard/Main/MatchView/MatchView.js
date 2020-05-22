import React, { Component } from "react";
import { Divider } from "react-native-elements";
import axios from "axios";
import SweetAlert from "react-native-sweet-alert";
import TabsContainer from "./Tabs/TabsContainer";
import DashboardContainer from "./Dashboard/DashboardContainer";

class MatchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMatch: "",
      error: false
    };
  }

  async componentDidMount() {
    const username = this.props.userData.username;
    await axios.put("/api/users", { username }).then(res => {
      const matchId = res.data[0].currentMatch.courseId;
      axios.put("/api/match/current", { matchId }).then(res => {
        const currentMatch = res.data[0];
        if (currentMatch === undefined) {
          SweetAlert.showAlertWithOptions({
            title: "No Current Match",
            subTitle:
              "You're not currently playing in a match! Go to 'New Match' to tee off!",
            style: "warning"
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
      <Divider>
        <TabsContainer />

        <DashboardContainer
          userData={this.props.userData}
          username={this.props.username}
          currentMatch={this.state.currentMatch}
        />
      </Divider>
    );
  }
}

export default MatchView;
