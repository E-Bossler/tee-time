import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "../../../client/src/components/Dashboard/Nav/Nav";
import Main from "../components/Dashboard/Main/Main";
import Footer from "../components/Dashboard/Footer/Footer";

function Dashboard() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Main />
        </Switch>
        <Switch>
          <Footer />
        </Switch>
      </Router>
    </div>
  );
}

export default Dashboard;
