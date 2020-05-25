import React, { Component } from "react";
import Banner from "./Banner";
import Slider from "./Slider";
import "./stylesheet.css";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Banner animateNav={this.props.animateNav} navOpen={this.props.navOpen} />
        <Slider animateNav={this.props.animateNav} navOpen={this.props.navOpen} />
      </nav>
    );
  }
}

export default Nav;
