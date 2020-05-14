import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "../../../client/src/components/Dashboard/Nav/Nav";
import Main from "../components/Dashboard/Main/Main";
import Footer from "../components/Dashboard/Footer/Footer";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Nav props={this.props} />
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
}

export default Dashboard;
