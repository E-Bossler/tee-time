import React from "react";
import { Route, Switch } from "react-router-dom";
import Tracker from "./Tracker/Tracker";
import Scoreboard from "./Scoreboard/Scoreboard";
import Chat from "./Chat/Chat";

function DashboardContainer() {
  return (
    <div>
      <Route path="/dashboard/matchView/tracker">
        <Tracker />
      </Route>

      <Route path="/dashboard/matchView/scoreboard">
        <Scoreboard />
      </Route>

      <Route path="/dashboard/matchView/chat">
        <Chat />
      </Route>
    </div>
  );
}

export default DashboardContainer;
