import React, { Component } from "react";
import { Input, Text, Button } from "react-native-elements";

class CourseInput extends Component {
  render() {
    return (
      <>
        <Input
          label="Find Course:"
          type="text"
          list="courses"
          className="form-control"
          id="course-input"
          name="course"
          value={this.props.course}
          onChange={this.props.handleCourseInputChange}
        />
        <Text
          id="not-found-msg"
          className={this.props.courseFound ? "hide" : "show"}
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
