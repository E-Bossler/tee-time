import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "../../../client/src/components/Dashboard/Nav/Nav";
import Main from "../components/Dashboard/Main/Main";
import Footer from "../components/Dashboard/Footer/Footer";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    };
  }

  animateNav(event) {
    const targetClass = event.target.className;
    const targetId = event.target.id;
    if (!this.state.navOpen && targetClass === "dashboard-link") {
      return
    } else if (!this.state.navOpen && targetClass === "icon-container") {
      return
    } else if (!this.state.navOpen && targetId === "stats-icon") {
      return
    } else if (!this.state.navOpen && targetId === "friends-icon") {
      return
    } else if (!this.state.navOpen && targetId === "courses-icon") {
      return
    } else if (this.state.navOpen) {
      this.setState({ navOpen: false });
    } else {
      this.setState({ navOpen: true });
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Nav 
            props={this.props} 
            navOpen={this.state.navOpen}
            animateNav={this.animateNav.bind(this)}
          />
          <Switch>
            <Main />
          </Switch>
          <Switch>
            <Footer 
              navOpen={this.state.navOpen}
              animateNav={this.animateNav.bind(this)}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Dashboard;
