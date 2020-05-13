import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Stats from "./Stats/Stats";
import Courses from "./Courses/Courses";
import Friends from "./Friends/Friends";
import Matches from "./Matches/Matches";

class UserMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dashboard/userMenu/stats">
            <Stats />
          </Route>

          <Route path="/dashboard/userMenu/courses">
            <Courses />
          </Route>

          <Route path="/dashboard/userMenu/friends">
            <Friends username={this.props.username} />
          </Route>

          <Route path="/dashboard/userMenu/matches">
            <Matches />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default UserMenu;
