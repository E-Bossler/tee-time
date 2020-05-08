import React from "react";
import Tracker from "./Tracker";
import Chat from "./Chat";
import Stats from "./Stats";
import { Route } from "react-router-dom";

function TabsContainer() {
  return (
    <div>
      <Route path="/dashboard/game/tracker">
        <Tracker />
      </Route>

      <Route path="/dashboard/game/chat">
        <Chat />
      </Route>

      <Route path="/dashboard/game/stats">
        <Stats />
      </Route>
    </div>
  );
}

export default TabsContainer;
