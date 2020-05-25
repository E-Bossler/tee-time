import React, { Component } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import "./stylesheet.css";

class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <h2>
          <Link 
            to="/dashboard"
            className="dashboard-link"
            onClick={this.props.animateNav}
          >
            Tee Time
          </Link>
        </h2>
        <Burger
          animateNav={this.props.animateNav}
          navOpen={this.props.navOpen}
        />
      </div>
    );
  }
}

export default Banner;
