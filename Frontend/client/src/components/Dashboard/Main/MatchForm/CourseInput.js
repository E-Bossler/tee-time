import React, { Component } from "react";
import axios from "axios";
import "./stylesheet.css";

class CourseInput extends Component {
    render() {
        return(
            <div className="form-group">
                <label 
                    htmlFor="course-input">
                    Find Course:
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="course-input" 
                    name='course'
                    defaultValue={this.props.course}
                    onChange={this.props.handleCourseInputChange} 
                />
                <p 
                    id="course-search-msg"
                    className={this.props.courseFound ? "hide" : "show"}>
                    Sorry, cannot find data for that course.
                </p>
                <button 
                    id="find-course-btn" 
                    onClick={this.props.handleCourseSubmit}>
                    Add Course
                </button>
            </div>
        );
    }
};

export default CourseInput;
