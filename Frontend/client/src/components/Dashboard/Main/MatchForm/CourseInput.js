import React, { Component } from "react";
import axios from "axios";
import "./stylesheet.css";

class CourseInput extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      course: "",
      courses: [],
      courseFound: true,
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://www.golfgenius.com/api_v2/L7DBdFNJ4i-mR6ZeBOFPMw/events/4995124311334371081/courses"
      )
      .then(res => {
        const courseData = res.data.courses;
        const courses = this.state.courses;
        for (let i = 0; i < courseData.length; i++) {
          courses.push(courseData[i].name.toLowerCase());
        }
        this.setState({ courses: courses });
        //   console.log(courses);
      });
  }

  handleInputChange(event) {
    let value = event.target.value;
    this.setState({ course: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const course = this.state.course.toLowerCase();
    const courses = this.state.courses;

    if (courses.indexOf(course) !== -1) {
      this.setState({ courseFound: true });
    } else {
      this.setState({ courseFound: false });
    }

    this.setState({ course: "" });
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="course-input">Find Course:</label>
        <input
          type="text"
          className="form-control"
          id="course-input"
          name="course"
          defaultValue={this.state.course}
          onChange={this.handleInputChange.bind(this)}
        />
        <p
          id="course-search-msg"
          className={this.state.courseFound ? "hide" : "show"}
        >
          Sorry, cannot find data for that course.
        </p>
        <button id="find-course-btn" onClick={this.handleSubmit.bind(this)}>
          Find Course
        </button>
      </div>
    );
  }
}

export default CourseInput;
