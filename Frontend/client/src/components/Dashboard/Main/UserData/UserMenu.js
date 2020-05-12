import React from "react";
import { Switch, Route } from "react-router-dom";
import Stats from "./Stats/Stats";
import Courses from "./Courses/Courses";
import Friends from "./Friends/Friends";
import Matches from "./Matches/Matches";

function UserMenu() {
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
          <Friends />
        </Route>

        <Route path="/dashboard/userMenu/matches">
          <Matches />
        </Route>
      </Switch>
    </div>
  );
}

export default UserMenu;
