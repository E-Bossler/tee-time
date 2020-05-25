import React, { Component } from "react";
import { Text, Button } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown";
import style from "./stylesheet.scss";

class CourseInput extends Component {
  render() {
    const courseNames = this.props.courses.map(course => course);
    const data = [];
    courseNames.map(course => {
      data.push({ value: this.props.capCourse(course) });
    });

    return (
      <>
        <Dropdown
          label="Find Course:"
          onChangeText={this.props.handleCourseInputChange}
          useNativeDriver={false}
          data={data}
        />

        <Text
          id="not-found-msg"
          style={this.props.courseFound ? style.hide : { color: "red" }}
        >
          Sorry, cannot find data for that course.
        </Text>
        <Button
          id="find-course-btn"
          title="Add Course"
          onPress={this.props.handleCourseSubmit}
        />
      </>
    );
  }
}

export default CourseInput;
