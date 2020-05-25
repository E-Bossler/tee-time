import React, { Component } from "react";
import { Divider, Text, Icon } from "react-native-elements";
import style from "./stylesheet.scss";

class MatchCourse extends Component {
  render() {
    let courseFound = false;

    if (this.props.matchCourse !== "") {
      courseFound = true;
    }

    return (
      <>
        <Text h4>Match Course:</Text>
        <Text style={courseFound ? style.hide : { color: "red" }}>
          No course added yet
        </Text>
        <Divider id="course-name" style={courseFound ? "show" : style.hide}>
          <Text>{this.props.matchCourse}</Text>
          <Icon
            className="fas fa-times"
            onClick={this.props.handleCourseDelete}
          />
        </Divider>
      </>
    );
  }
}

export default MatchCourse;
