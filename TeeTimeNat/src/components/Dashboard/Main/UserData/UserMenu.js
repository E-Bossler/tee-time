import React, { Component } from "react";
import { Divider } from "react-native-elements";
// import Stats from "./Stats/Stats";
import Courses from "./Courses/Courses";
import Friends from "./Friends/Friends";
import Matches from "./Matches/Matches";

class UserMenu extends Component {
  /* <Route path="/dashboard/userMenu/stats"> */
  /* <Route path="/dashboard/userMenu/courses"> */
  /* <Route path="/dashboard/userMenu/friends"> */
  /* <Route path="/dashboard/userMenu/matches"> */
  render() {
    return (
      <>
        {/* <Stats userData={this.props.userData} /> */}

        <Courses userData={this.props.userData} />

        <Friends
          userData={this.props.userData}
          username={this.props.username}
        />

        <Matches userData={this.props.userData} />
      </>
    );
  }
}

export default UserMenu;
