import React, { Component } from "react";
import Banner from "./Banner";
import Slider from "./Slider";
import "./stylesheet.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  animate() {
    if (this.state.clicked) {
      this.setState({ clicked: false });
    } else {
      this.setState({ clicked: true });
    }
  }

  render() {
    return (
      <nav>
        <Banner action={this.animate.bind(this)} clicked={this.state.clicked} />
        <Slider action={this.animate.bind(this)} clicked={this.state.clicked} />
      </nav>
    );
  }
}

export default Nav;
