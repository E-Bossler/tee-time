import React, { Component } from "react";
import { Divider, ListItem, Button } from "react-native-elements";
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
      <>
        {/* <Link
              to="/dashboard/userMenu/stats"> */}

        <Button title="Stats" icon={{ type: "font-awesome", name: "trophy" }} />

        {/* <Link
              id="friends-link"
              className="footer-link"
              to="/dashboard/userMenu/friends"> */}

        <Button
          title="Friends"
          icon={{ type: "font-awesome", name: "users" }}
        />

        {/* <Link
              id="courses-link"
              className="footer-link"
              to="/dashboard/userMenu/courses"> */}

        <Button title="Courses" icon={{ type: "font-awesome", name: "flag" }} />
      </>
    );
  }
}

export default Footer;
