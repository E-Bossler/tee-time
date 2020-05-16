import React, { Component } from "react";

class CourseDatalist extends Component {
  render() {
    return (
      <datalist id="courses">
        {this.props.courses.map((course, key) => (
          <option key={key} value={this.props.capCourse(course)} />
        ))}
      </datalist>
    );
  }
}

export default CourseDatalist;
