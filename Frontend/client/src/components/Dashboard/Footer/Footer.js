import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./stylesheet.css";

const friendsIconStyles = {
  "--fa-secondary-opacity": "1.0",
  "--fa-primary-color": "blue",
  "--fa-secondary-color": "dodgerblue",
};

const statsIconStyles = {
  "--fa-secondary-opacity": "1.0",
  "--fa-primary-color": "green",
  "--fa-secondary-color": "grey",
};

const coursesIconStyles = {
  "--fa-secondary-opacity": "1.0",
  "--fa-primary-color": "grey",
  "--fa-secondary-color": "red",
};

class Footer extends Component {
  render() {
    return (
      <div id="footer-container">
        <ul id="footer-list">
          <li className="footer-item" id="stats-item">
            <Link
              className="footer-link"
              id="stats-link"
              onClick={this.props.animateNav}
              to="/dashboard/userMenu/stats"
            >
              <div className="icon-container">
                Stats
                <i
                  className="fad fa-chart-bar fa-lg"
                  id="stats-icon"
                  style={statsIconStyles}
                ></i>
              </div>
            </Link>
          </li>
          <li className="footer-item" id="friends-item">
            <Link
              className="footer-link"
              id="friends-link"
              onClick={this.props.animateNav}
              to="/dashboard/userMenu/friends"
            >
              <div className="icon-container">
                Friends
                <i
                  className="fad fa-user-friends fa-lg"
                  id="friends-icon"
                  style={friendsIconStyles}
                ></i>
              </div>
            </Link>
          </li>
          <li className="footer-item" id="courses-item">
            <Link
              className="footer-link"
              id="courses-link"
              onClick={this.props.animateNav}
              to="/dashboard/userMenu/courses"
            >
              <div className="icon-container">
                Courses
                <i 
                  className="fad fa-flag fa-lg"
                  id="courses-icon"
                  style={coursesIconStyles}
                ></i>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
