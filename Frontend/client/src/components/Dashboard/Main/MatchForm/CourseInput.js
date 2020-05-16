import React, { Component } from "react";
import CourseDatalist from "./CourseDatalist";
import "./stylesheet.css";

class CourseInput extends Component {
  render() {
    return (
      <form className="form-group">
        <label htmlFor="course-input">Find Course:</label>
        <CourseDatalist
          capCourse={this.props.capCourse}
          courses={this.props.courses}
        />
        <input
          type="text"
          list="courses"
          className="form-control"
          id="course-input"
          name="course"
          value={this.props.course}
          onChange={this.props.handleCourseInputChange}
        />
        <p
          id="not-found-msg"
          className={this.props.courseFound ? "hide" : "show"}
        >
          Sorry, cannot find data for that course.
        </p>
        <button id="find-course-btn" onClick={this.props.handleCourseSubmit}>
          Add Course
        </button>
      </form>
    );
  }
}

export default CourseInput;
