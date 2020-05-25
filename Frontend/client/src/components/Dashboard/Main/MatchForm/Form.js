import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GolfAPI from "../../../utils/golfGeniusAPI";
import CourseInput from "./CourseInput";
import FriendsInput from "./FriendsInput";
import MatchCourse from "./MatchCourse";
import FriendsList from "./FriendsList";
import swal from "sweetalert";
import "./stylesheet.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      allFriends: [],
      courses: [],
      courseHoles: [],
      friend: "",
      course: "",
      matchFriends: [],
      matchCourse: "",
      matchHoles: "",
      friendFound: true,
      courseFound: true,
      formComplete: true
    };
  }

  findFriends = () => {
    const username = this.state.username;
    axios.put("/api/dashboard/userMenu/friends", { username }).then(res => {
      const friendsData = res.data[0].friends;
      const friends = [];
      if (friendsData === undefined) {
        swal(
          "Add Friends",
          "You do not yet have any friends added. Add some friends!",
          "info"
        );
      } else {
        for (let i = 0; i < friendsData.length; i++) {
          friends.push(friendsData[i]);
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
      const courseHoles = this.state.courseHoles;
      for (let i = 0; i < courseData.length; i++) {
        courseHoles.push(courseData[i].hole_labels.length);
        courses.push(courseData[i].name.toLowerCase());
      }
      this.setState({ courses: courses });
      this.setState({ couseHoles: courseHoles });
    });

    this.findFriends(user);
  }

  handleCourseInputChange(event) {
    let value = event.target.value;
    this.setState({ course: value });
    this.setState({ formComplete: true });
  }

  handleFriendInputChange(event) {
    let value = event.target.value;
    this.setState({ friend: value });
    this.setState({ formComplete: true });
  }

  handleCourseSubmit(event) {
    event.preventDefault();
    const course = this.state.course.toLowerCase();
    const courses = this.state.courses;
    const courseHoles = this.state.courseHoles;
    const courseIndex = courses.indexOf(course);

    if (courseIndex !== -1) {
      const matchCourse = this.capCourse(course);
      this.setState({ courseFound: true });
      this.setState({ matchCourse: matchCourse });
      this.setState({ matchHoles: courseHoles[courseIndex] });
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
    const allFriends = this.state.allFriends.map(friend => friend.username);
    const matchArr = this.state.matchFriends.map(mFriend => mFriend.username);
    const username = friend;
    axios.put("/api/users", {username}).then(res => {
      console.log(res.data);
      const friendData = {
        username: res.data[0].username,
        currentMatchData: {
          currentMatchId: res.data[0].currentMatch.courseId,
          scoreData: res.data[0].currentMatch.holes
        }
      }
      console.log(friendData);
      if (allFriends.indexOf(friend) !== -1 && matchArr.indexOf(friend) === -1) {
        this.setState({ matchFriends: [...this.state.matchFriends, friendData]})
        this.setState({ friendFound: true });
        this.setState({ friend: "" });
      } else {
        this.setState({ friendFound: false });
        this.setState({ friend: "" });
      }
    });
  }

  handleFriendDelete(event) {
    const friendToDelete = event.target.id;
    const matchFriends = this.state.matchFriends;
    for (let i = 0; i < matchFriends.length; i++) {
      if (matchFriends[i].username === friendToDelete) {
        matchFriends.splice(i, 1);
      }
    }
    this.setState({ matchFriends });
  }

  handleMatchSubmit(event) {
    const course = this.state.matchCourse;
    const players = this.state.matchFriends;
    const holes = this.state.matchHoles;
    if (course === "" || players.length === 0) {
      event.preventDefault();
      console.log("no course selected");
      this.setState({ formComplete: false });
    }
    const userData = this.props.userData;
    const allPlayers = [...players, userData];

    axios.post("/dashboard/api/match/new", { course, allPlayers, holes });
  }

  render() {
    return (
      <div id="form">
        <CourseInput
          handleCourseSubmit={this.handleCourseSubmit.bind(this)}
          handleCourseInputChange={this.handleCourseInputChange.bind(this)}
          course={this.state.course}
          courses={this.state.courses}
          courseFound={this.state.courseFound}
          capCourse={this.capCourse.bind(this)}
        />

        <FriendsInput
          handleFriendSubmit={this.handleFriendSubmit.bind(this)}
          handleFriendInputChange={this.handleFriendInputChange.bind(this)}
          friend={this.state.friend}
          friendFound={this.state.friendFound}
          allFriends={this.state.allFriends}
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
          <Link 
            to="/dashboard/matchView"
            id="start-match-link"
            onClick={this.handleMatchSubmit.bind(this)}
          >
            Start Match
          </Link>
        </button>
        <p 
          id="select-course-msg"
          className={this.state.formComplete ? "hide" : "show"}
        >
          Please add a course and friends
        </p>
      </div>
    );
  }
}

export default Form;
