import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CourseInput from "./CourseInput";
import FriendsInput from "./FriendsInput";
import MatchCourse from "./MatchCouse";
import FriendsList from "./FriendsList";
import "./stylesheet.css";

class Form extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          username: this.props.username,
          friend: "",
          friends: [],
          friendFound: true,
          course: "",
          matchCourse: "",
          courses: [],
          courseFound: true
        };
    }

    findFriends = user => {
        axios.put("/api/dashboard/userMenu/friends", { user }).then(res => {
            const friends = res.data[0].Friends;
            if (friends === undefined) {
              alert("You don't have any friends! Add friends to become popular!");
            } else {
              this.setState({ friends });
            }
        });
    }

    findUser = (friend, friends, user) => {
        axios
          .post("/api/dashboard/userMenu/friends", { friend, user })
          .then(res => {
            console.log(res.data);
            if (res.data === "Friend added!") {
              this.setState({ friends: [...friends, friend] });
            } else if (res.data === "Friend not Found.") {
                console.log("Friend not found");
            }
          });
    }
    
    findCourses = () => {
        axios
            .get("https://www.golfgenius.com/api_v2/L7DBdFNJ4i-mR6ZeBOFPMw/events/4995124311334371081/courses")
            .then(res => {
              const courseData = res.data.courses;
              const courses = this.state.courses;
              for (let i = 0; i < courseData.length; i++) {
                courses.push((courseData[i].name).toLowerCase());
              }
              this.setState({ courses: courses });
              console.log(courses);
            })
    }

    componentDidMount() {
        const user = this.state.username;
        this.findCourses();
        this.findFriends(user);
    }

    handleCourseInputChange(event) {
        let value = event.target.value;
        this.setState({ course: value });
    }

    handleFriendInputChange(event) {
        let value = event.target.value;
        this.setState({ friend: value });
    }

    handleCourseSubmit(event) {
        event.preventDefault();
        console.log(this.state.course);
        const course = (this.state.course).toLowerCase();
        const courses = this.state.courses;

        if (courses.indexOf(course) !== -1) {
            this.setState({ courseFound: true });
            this.setState({ matchCourse: course });
        } else {
            this.setState({ courseFound: false });
        }

        this.setState({ course: "" });
    }

    handleFriendSubmit(event) {
        event.preventDefault();
        const friend = this.state.friendName;
        const friends = this.state.friends;
        const user = this.state.username;
        friends.push(this.state.friend);
        this.setState({ friends: friends });

        console.log(friend, user);

        // findUser(friend, user);

        if (friends.indexOf(friend) !== -1) {
            this.setState({ friendFound: true });
        } else {
            this.setState({ friendFound: false });
        }
        this.setState({ friend: "" });
    }

    render() {
        return(
            <div id="form">
                <CourseInput 
                    handleCourseSubmit={this.handleCourseSubmit.bind(this)}
                    handleCourseInputChange={this.handleCourseInputChange.bind(this)} 
                    course={this.state.course}
                    courseFound={this.state.courseFound}
                />
                <FriendsInput 
                    handleFriendSubmit={this.handleFriendSubmit.bind(this)} 
                    handleFriendInputChange={this.handleFriendInputChange.bind(this)} 
                    friend={this.state.friend}
                    foundFriend={this.state.friendFound}
                />
                <MatchCourse 
                    matchCourse={this.state.matchCourse}
                />
                <FriendsList 
                    friends={this.state.friends}
                />
                <button id="start-match-btn">
                    <Link id="match-link" to="/dashboard/matchView">
                        Start Game
                    </Link>
                </button>
            </div>
        );
    };
};

export default Form;