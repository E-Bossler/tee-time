import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./stylesheet.css";

const flagIconStyles = {
  "--fa-secondary-opacity": "1.0",
  "--fa-primary-color": "grey",
  "--fa-secondary-color": "red",
};

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

class Footer extends Component {
  render() {
    return (
      <div id="footer-container">
        <ul id="footer-list">
          <li className="footer-item" id="stats-item">
            <Link
              id="stats-link"
              className="footer-link"
              to="/dashboard/userMenu/stats"
            >
              <div>
                Stats
                <i
                  className="fad fa-chart-bar fa-lg"
                  style={statsIconStyles}
                ></i>
              </div>
            </Link>
          </li>
          <li className="footer-item" id="friends-item">
            <Link
              id="friends-link"
              className="footer-link"
              to="/dashboard/userMenu/friends"
            >
              <div>
                Friends
                <i
                  className="fad fa-user-friends fa-lg"
                  style={friendsIconStyles}
                ></i>
              </div>
            </Link>
          </li>
          <li className="footer-item" id="courses-item">
            <Link
              id="courses-link"
              className="footer-link"
              to="/dashboard/userMenu/courses"
            >
              <div>
                Courses
                <i className="fad fa-flag fa-lg" style={flagIconStyles}></i>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
