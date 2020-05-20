import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
      friend: "",
      friendFound: true,
      matchFriends: [],
      course: "",
      matchCourse: "",
      courses: [],
      courseFound: true,
      redirectToReferrer: false,
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

  findCourses = () => {
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
        this.setState({ courses });
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

  handleMatchSubmit() {
    const course = this.state.matchCourse;
    const players = this.state.matchFriends;
    const userData = this.props.userData;
    const allPlayers = [...players, userData];

    axios.post("/dashboard/api/match/new", { course, allPlayers }).then(res => {
      this.setState({ redirectToReferrer: true });
    });
  }

  handleFriendSubmit(event) {
    event.preventDefault();
    const friend = this.state.friend;
    const friendArr = this.state.allFriends;
    const allFriends = this.state.allFriends.map(friend => friend.username);
    const matchArr = this.state.matchFriends.map(mFriend => mFriend.username);

    if (allFriends.indexOf(friend) !== -1 && matchArr.indexOf(friend) === -1) {
      for (let i = 0; i < friendArr.length; i++) {
        if (friendArr[i].username === friend) {
          this.setState({
            matchFriends: [...this.state.matchFriends, friendArr[i]],
          });
        }
      }
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
      if (matchFriends[i].username === friendToDelete) {
        matchFriends.splice(i, 1);
      }
    }
    this.setState({ matchFriends });
  }

  render() {
    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer === true) {
      return <Redirect to="/dashboard/matchview" />;
    }
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

        <button
          onClick={this.handleMatchSubmit.bind(this)}
          id="start-match-btn"
        >
          <p>Start</p>
        </button>
      </div>
    );
  }
}

export default Form;
