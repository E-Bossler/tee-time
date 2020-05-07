import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./stylesheet.css";

class Links extends Component {
  state = {
    slide: false,
  };

  animate = () => {
    if (this.state.clicked) {
      this.setState({ clicked: false });
    } else {
      this.setState({ clicked: true });
    }
  };

  render() {
    return (
      <ul
        id="nav-links"
        onClick={this.animate}
        className={this.state.clicked ? "slide-right" : "slide-left"}
      >
        <li>
          <Link className="nav-link" to="/dashboard/game/stats">
            Stats
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/dashboard/game/tracker">
            Tracker
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/dashboard/game/chat">
            Friends
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/dashboard/game/new">
            New Match
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/dashboard">
            Logout
          </Link>
        </li>
      </ul>
    );
  }
}

export default Links;
