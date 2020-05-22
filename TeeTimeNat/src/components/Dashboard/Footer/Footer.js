import React, { Component } from "react";
import { Divider, ListItem, Icon } from "react-native-elements";
import style from "./stylesheet.scss";

const flagIconStyles = {
  "--fa-secondary-opacity": "1.0",
  "--fa-primary-color": "grey",
  "--fa-secondary-color": "red"
};

const friendsIconStyles = {
  "--fa-secondary-opacity": "1.0",
  "--fa-primary-color": "blue",
  "--fa-secondary-color": "dodgerblue"
};

const statsIconStyles = {
  "--fa-secondary-opacity": "1.0",
  "--fa-primary-color": "green",
  "--fa-secondary-color": "grey"
};

class Footer extends Component {
  render() {
    return (
      <Divider style={style} id="footer-container">
        <Divider id="footer-list">
          <ListItem className="footer-item" id="stats-item">
            {/* <Link
              to="/dashboard/userMenu/stats"> */}
            <Divider>
              Stats
              <Icon
                className="fad fa-chart-bar fa-lg"
                style={statsIconStyles}
              />
            </Divider>
          </ListItem>
          <ListItem className="footer-item" id="friends-item">
            {/* <Link
              id="friends-link"
              className="footer-link"
              to="/dashboard/userMenu/friends"> */}
            <Divider>
              Friends
              <Icon
                className="fad fa-user-friends fa-lg"
                style={friendsIconStyles}
              />
            </Divider>
          </ListItem>
          <ListItem className="footer-item" id="courses-item">
            {/* <Link
              id="courses-link"
              className="footer-link"
              to="/dashboard/userMenu/courses"> */}
            <Divider>
              Courses
              <Icon className="fad fa-flag fa-lg" style={flagIconStyles} />
            </Divider>
          </ListItem>
        </Divider>
      </Divider>
    );
  }
}

export default Footer;
