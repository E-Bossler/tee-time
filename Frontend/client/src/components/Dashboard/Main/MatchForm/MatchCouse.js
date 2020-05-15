import React, {Component} from "react";
import "./stylesheet.css";

class MatchCourse extends Component {
    render() {
        let courseFound = false;
        
        if (this.props.matchCourse !== "") {
            courseFound = true;
        }

        return(
            <div id="course-container">
                <h3>Match Course:</h3>
                <p className={courseFound ? "hide" : "show"}>No course added yet</p>
                <p>{this.props.matchCourse}</p>
            </div>
        );
    }
};

export default MatchCourse;