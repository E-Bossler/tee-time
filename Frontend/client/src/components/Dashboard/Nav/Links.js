import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./stylesheet.css";
import { setInStorage } from "../../utils/storage";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLogin: false,
    };
  }

  handleLogOut(e) {
    e.preventDefault();
    setInStorage("", {});
    this.setState({ toLogin: true });
    window.location.href = "/login";
  }

  render() {
    if (this.state.toLogin === true) {
      return <Redirect exact to="/signup" />;
    }

    return (
      <ul
        id="nav-links"
        className={this.props.burgerClicked ? "slide-left" : "slide-right"}
      >
        <li>
          <Link
            id="matchView-link"
            className="nav-link"
            onClick={this.props.animate}
            to="/dashboard/matchView"
          >
            Current Match
          </Link>
        </li>
        {/* <li>
          <Link
            id="saved-matches-link"
            className="nav-link"
            onClick={this.props.animate}
            to="/dashboard/userMenu/matches"
          >
            Saved Matches
          </Link>
        </li> */}
        <li>
          <Link
            id="matchForm-link"
            className="nav-link"
            onClick={this.props.animate}
            to="/dashboard/matchForm"
          >
            New Match
          </Link>
        </li>
        <li>
          <Link
            id="logout-link"
            className="nav-link"
            onClick={e => {
              this.handleLogOut(e);
            }}
            to="/"
          >
            Logout
          </Link>
        </li>
      </ul>
    );
  }
}

export default Links;
