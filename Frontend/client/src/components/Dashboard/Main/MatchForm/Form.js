import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GolfAPI from "../../../utils/golfGeniusAPI";
import CourseInput from "./CourseInput";
import FriendsInput from "./FriendsInput";
import MatchCourse from "./MatchCouse";
import FriendsList from "./FriendsList";
import "./stylesheet.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      allFriends: [],
      friend: "",
      friendFound: true,
      matchFriends: [],
      course: "",
      matchCourse: "",
      courses: [],
      courseFound: true,
    };
  }

  findFriends = () => {
    const user = this.state.username;
    axios.put("/api/dashboard/userMenu/friends", { user }).then(res => {
      const friendsData = res.data[0].friends;
      const friends = [];
      if (friendsData === undefined) {
        alert("You don't have any friends! Add friends to become popular!");
      } else {
        for (let i = 0; i < friendsData.length; i++) {
            friends.push(friendsData[i].username);
        }
        this.setState({ allFriends: friends });
      }
    });
  };

  capCourse = course => {
    const words = course.toLowerCase().split(" ");
    let capCourse = "";
    for (let i = 0; i < words.length; i++) {
      const splitWord = words[i].split("");
      const capfirst = splitWord[0].toUpperCase();
      splitWord.shift([0]);
      splitWord.unshift(capfirst);
      const capWord = splitWord.join("");
      if (i === 0) {
        capCourse += capWord;
      } else {
        capCourse += ` ${capWord}`;
      }
    }
    return capCourse;
  };

  componentDidMount() {
    const user = this.state.username;

    GolfAPI.findCourses().then(res => {
        const courseData = res.data.courses;
        const courses = this.state.courses;
        for (let i = 0; i < courseData.length; i++) {
          courses.push(courseData[i].name.toLowerCase());
        }
        this.setState({ courses: courses });
    });

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
    const course = this.state.course.toLowerCase();
    const courses = this.state.courses;

    if (courses.indexOf(course) !== -1) {
      const matchCourse = this.capCourse(course);
      this.setState({ courseFound: true });
      this.setState({ matchCourse: matchCourse });
    } else {
      this.setState({ courseFound: false });
    }

    this.setState({ course: "" });
  }

  handleCourseDelete() {
    this.setState({ course: "" });
    this.setState({ matchCourse: "" });
  }

  handleFriendSubmit(event) {
    event.preventDefault();
    const friend = this.state.friend;
    const allFriends = this.state.allFriends;
    const matchFriends = this.state.matchFriends;

    if (allFriends.indexOf(friend) !== -1  && matchFriends.indexOf(friend) === -1) {
        matchFriends.push(friend);
        this.setState({ matchFriends: matchFriends});
        this.setState({ friendFound: true });
    } else {
        this.setState({ friendFound: false });
    }

    this.setState({ friend: "" });
  }

  handleFriendDelete(event) {
    const friendToDelete = event.target.id;
    const matchFriends = this.state.matchFriends;
    for (let i = 0; i < matchFriends.length; i++) {
      if (matchFriends[i] === friendToDelete) {
        matchFriends.splice(i, 1);
      }
    }
    this.setState({ matchFriends: matchFriends });
  }

  render() {
    return (
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
          friendFound={this.state.friendFound}
        />
        <MatchCourse
          matchCourse={this.state.matchCourse}
          handleCourseDelete={this.handleCourseDelete.bind(this)}
        />
        <FriendsList
          matchFriends={this.state.matchFriends}
          handleFriendDelete={this.handleFriendDelete.bind(this)}
        />
        <button id="start-match-btn">
          <Link id="match-link" to="/dashboard/matchView">
            Start Game
          </Link>
        </button>
      </div>
    );
  }
}

export default Form;
