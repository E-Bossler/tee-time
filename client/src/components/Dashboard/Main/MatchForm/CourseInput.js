import React from "react";

function CourseInput() {
    return(
        <div className="form-group">
            <label for="course-input">Course:</label>
            <input type="course" className="form-control" id="course-input" name='course'></input>
        </div>
    );
};

export default CourseInput;