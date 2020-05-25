import React, { Component } from "react";
import axios from "axios";
import GolfAPI from "../../../../utils/golfGeniusAPI";
import "./stylesheet.css";

const iconStyles = {
    "--fa-primary-color": "rgb(60, 60, 60)",
    "--fa-secondary-color": "rgb(60, 60, 60)",
    "--fa-secondary-opacity": "1.0"
};

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: this.props.userData.username,
          favCourses: [],
          otherCourses: [],
          allCourses: [],
          activeIcon: "",
          courseToDelete: ""
        };
    }

    setOtherCourses = courseList => {
        const courses = [];
        for (let i = 0; i < courseList.length; i++) {
            if ((this.state.favCourses).indexOf(courseList[i].name) === -1) {
                courses.push(courseList[i].name);
            }
        }
        this.setState({ otherCourses: courses });
    }

    componentDidMount() {
        const username = this.state.username;

        axios.post("/api/user/favoriteCourses", {username}).then(res => {
            const favCourses = [];
            for (let i = 0; i < res.data.favoriteCourses.length; i++) {
                let courseName = res.data.favoriteCourses[i].course;
                favCourses.push(courseName);
            }
            this.setState({ favCourses: favCourses });
        }).then(() => {
            GolfAPI.findCourses().then(res => {
                const allCourses = res.data.courses;
                this.setState({ allCourses: allCourses });
                this.setOtherCourses(allCourses);
            });
        })
    }

    handlePossibleDelete = event => {
        const course = event.target.id;
        this.setState({ courseToDelete: course });
    }

    handleCancel() {
        this.setState({ courseToDelete: "" });
    }

    handleFavDelete = event => {
        const course = event.target.id;
        const username = this.state.username;

        // delete course from user favorite courses
        axios.post("/api/user/favoriteCourses/delete", {username, course});

        // update favorite courses state
        const favCourses = this.state.favCourses;
        const index = favCourses.indexOf(course);
        favCourses.splice(index, 1);
        this.setState({ favCourses: favCourses});

        // update other courses state
        const allCourses = this.state.allCourses;
        this.setOtherCourses(allCourses);

        // hide icons
        this.setState({ activeIcon: "" });
        this.setState({ courseToDelete: "" });
    }

    handleIconAction = event => {
        if (this.state.activeIcon === "") {
            const course = event.target.id;
            this.setState({ activeIcon: course });
        } else {
            this.setState({ activeIcon: "" });
        }
    }

    handleCourseSave() {
        const username = this.state.username;
        const course = this.state.activeIcon;

        // add course to user favorite courses
        axios.put("/api/user/favoriteCourses", {course, username});

        // update favorite courses state
        const favCourses = this.state.favCourses;
        favCourses.push(course);
        this.setState({ favCourses: favCourses});

        // update other courses state
        const courses = this.state.otherCourses;
        const index = courses.indexOf(course);
        courses.splice(index, 1);
        this.setState({ otherCourses: courses });
    }

    handleMoreInfo() {
        const course = this.state.activeIcon;
        window.open(`http://google.com/search?q=${course}`)
        this.setState({ activeIcon: "" });
    }

    handleActionCancel() {
        this.setState({ activeIcon: "" });
    }

    render() {
        const otherCourses = this.state.otherCourses;
        const favCourses = this.state.favCourses;

        return(
            <div id="courses-container">

                <div id="favorite-container">
                    <h3>My Favorite Courses:</h3>
                    <ul id="user-courses-list">
                        {favCourses.map((value, index) => {
                            return <li key={index}>
                                {value}
                                <span
                                    className={this.state.courseToDelete === value ? "show" : "hide"}
                                    onClick={this.handleCancel.bind(this)}
                                >
                                    cancel
                                </span>
                                <button
                                    id={value}
                                    className={this.state.courseToDelete === value ? "show red" : "hide"}
                                    onClick={this.handleFavDelete.bind(this)}
                                >
                                    Delete?
                                </button>
                                <button
                                    id={value}
                                    className={this.state.courseToDelete === value ? "hide" : "show"}
                                    onClick={this.handlePossibleDelete.bind(this)}
                                >
                                    Favorite
                                </button>
                            </li>
                        })}
                    </ul>
                </div>
    
                <div id="all-container">
                    <h3>All Available Courses:</h3>
                    <ul id="all-courses-list">
                        {otherCourses.map((value, index) => {
                            return <div className="li-container" key={index}>
                                <li>
                                    {value}
                                    <i 
                                        className={this.state.activeIcon === value ? 
                                        "hide fad fa-ellipsis-h" : "show fad fa-ellipsis-h"}
                                        id={value}
                                        style={iconStyles}
                                        onClick={this.handleIconAction.bind(this)}
                                    >
                                    </i>
                                    <i 
                                        className={this.state.activeIcon === value ? 
                                        "show fas fa-times" : "hide fas fa-times"}
                                        onClick={this.handleActionCancel.bind(this)}
                                    >
                                    </i>
                                </li>
                                <div 
                                    className={this.state.activeIcon === value ? 
                                    "show btn-container" : "hide btn-container"}
                                >
                                    <button
                                        className={this.state.activeIcon === value ? "show" : "hide"}
                                        id="add-btn"
                                        onClick={this.handleCourseSave.bind(this)}
                                    >
                                        Add
                                    </button>
                                    <button
                                        className={this.state.activeIcon === value ? "show" : "hide"}
                                        id="info-btn"
                                        onClick={this.handleMoreInfo.bind(this)}
                                    >
                                        More Info
                                    </button>
                                </div>
                            </div>
                        })}
                    </ul>
                </div>
                
            </div>
        );
    }
};

export default Courses;