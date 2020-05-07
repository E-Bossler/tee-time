import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "../../../client/src/components/Dashboard/Nav/Nav";
import Page from "../../../client/src/components/Dashboard/Main/Page";

function Dashboard() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Page />
        </Switch>
      </Router>
    </div>
  );
}

export default Dashboard;
