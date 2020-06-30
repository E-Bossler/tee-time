import React, { Component } from "react";
import { View } from "react-native";
import { Text, Icon } from "react-native-elements";
// import style from "./stylesheet.scss";

class MatchCourse extends Component {
  render() {
    let courseFound = false;

    if (this.props.matchCourse !== "") {
      courseFound = true;
    }

    return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginHorizontal: 10
        }}
      >
        <Text h4>Match Course</Text>
        <Text style={courseFound ? { display: "none " } : { color: "red" }}>
          No course added yet
        </Text>
        <View id="course-name" style={courseFound ? "show" : style.hide}>
          <Text>{this.props.matchCourse}</Text>
          <Icon
            onPress={() =>
              this.props.handleCourseDelete(this.props.matchCourse)
            }
            name={"undo"}
            type={"font-awesome"}
          />
        </View>
      </View>
    );
  }
}

export default MatchCourse;
