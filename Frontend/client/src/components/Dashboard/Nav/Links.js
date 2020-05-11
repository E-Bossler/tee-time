import React, { Component } from "react";
import { Link, Router, Route, Switch } from "react-router-dom";
import "./stylesheet.css";
import Login from "../../../pages/Login";

class Links extends Component {
  
  
  
  render() {
    return (
      <ul id="nav-links" className={this.props.burgerClicked ? "slide-left" : "slide-right"}>
        <li>
          <Link 
            id="matchView-link" 
            className="nav-link"
            onClick={this.props.animate} 
            to="/dashboard/matchView">
            Current Match
          </Link>
        </li>
        <li>
          <Link 
            id="matchForm-link" 
            className="nav-link"
            onClick={this.props.animate} 
            to="/dashboard/matchForm">
            New Match
          </Link>
        </li>
        <li>
          <Link 
            id="saved-matches-link" 
            className="nav-link"
            onClick={this.props.animate} 
            to="/dashboard/userMenu/matches">
            Saved Matches
          </Link>
        </li>
        <li>
          <Link 
            id="logout-link" 
            className="nav-link"
            onClick={this.props.animate} 
            to="#"
            >
            Logout
          </Link>
        </li>
      </ul>
    );
  }
}

export default Links;
