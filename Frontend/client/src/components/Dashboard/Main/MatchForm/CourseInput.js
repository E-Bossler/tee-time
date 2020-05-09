import React from "react";
import "./stylesheet.css";

function CourseInput() {
    return(
        <div className="form-group">
            <label htmlFor="course-input">Select a Course:</label>
            <input type="course" className="form-control" id="course-input" name='course'></input>
        </div>
    );
};

export default CourseInput;