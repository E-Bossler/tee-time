import React, { Component } from "react";
import GolfAPI from "../../../../utils/golfGeniusAPI";
import "./stylesheet.css";

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: this.props.username,
          userCourses: [],
          allCourses: []
        };
    }

    componentDidMount() {
        GolfAPI.findCourses().then(res => {
            const courseData = res.data.courses;
            const courses = [];
            for (let i = 0; i < courseData.length; i++) {
              courses.push(courseData[i].name);
            }
            this.setState({ allCourses: courses });
            // console.log(courses);
        });
    }

    render() {
        return(
            <div id="courses-container">
                <h3>My Favorite Courses:</h3>
                <ul id="user-courses-list">
                    <li>Placeholder Greens</li>
                </ul>
                <h3>All Available Courses:</h3>
                <ul id="all-courses-list">
                    {this.state.allCourses.map((value, index) => {
                        return <li key={index}>
                            {value}
                        </li>
                    })}
                </ul>
            </div>
        );
    }
};

export default Courses;