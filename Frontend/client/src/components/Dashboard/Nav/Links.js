import React, { Component } from "react";
import "./stylesheet.css";

class Links extends Component {
  render() {
    return (
      <ul id="nav-links" className={this.props.burgerClicked ? "slide-left" : "slide-right"}>
        <li><a className='nav-link' to='#'>Stats</a></li>
        <li><a className='nav-link' to='#'>Courses</a></li>
        <li><a className='nav-link' to='#'>Friends</a></li>
        <li><a className='nav-link' to='#'>Logout</a></li>
      </ul>
    );
  }
}

export default Links;
