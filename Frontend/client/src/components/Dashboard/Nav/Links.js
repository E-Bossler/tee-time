import React, { Component } from "react";
import "./stylesheet.css";

class Links extends Component {
  state = {
    slide: false
  };

  animate = () => {
      if (this.state.clicked) {
          this.setState({ clicked: false })
      } else {
          this.setState({ clicked: true });
      }
  };

  render() {
    return (
      <ul id="nav-links" onClick={this.animate} className={this.state.clicked ? "slide-right" : "slide-left"}>
        <li><a className='nav-link' href='#'>Stats</a></li>
        <li><a className='nav-link' href='#'>Courses</a></li>
        <li><a className='nav-link' href='#'>Friends</a></li>
        <li><a className='nav-link' href='#'>Logout</a></li>
      </ul>
    );
  }
}

export default Links;
