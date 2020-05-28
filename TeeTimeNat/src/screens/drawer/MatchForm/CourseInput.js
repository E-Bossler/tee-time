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
          fontSize={20}
          baseColor={"rgb(100, 200, 100)"}
          textColor={"rgb(0, 0, 0)"}
          containerStyle={{ width: "85%", alignSelf: "center" }}
          onChangeText={this.props.handleCourseInputChange}
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
          buttonStyle={{
            backgroundColor: "rgb(100, 200, 100)",
            color: "white",
            paddingVertical: 10,
            alignSelf: "center",
            width: "75%",
            marginTop: 25
          }}
          onPress={this.props.handleCourseSubmit}
        />
      </>
    );
  }
}

export default CourseInput;
