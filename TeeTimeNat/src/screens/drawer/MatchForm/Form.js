import React, { Component } from "react";
import { Button } from "react-native-elements";
import { View } from "react-native";
import axios from "axios";
import GolfAPI from "../../../utils/golfGeniusAPI";
import CourseInput from "./CourseInput";
import FriendsInput from "./FriendsInput";
import MatchCourse from "./MatchCourse";
import FriendsList from "./FriendsList";
import SweetAlert from "react-native-sweet-alert";

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
      courseFound: true
    };
  }

  findFriends = () => {
    const username = this.props.userData.username;
    axios
      .put("http://192.168.138.2:7777/api/dashboard/userMenu/friends", {
        username
      })
      .then(res => {
        const friendsData = res.data[0].friends;
        const friends = [];
        if (friendsData === undefined) {
          SweetAlert.showAlertWithOptions({
            title: "Add Friends",
            subTitle:
              "You do not yet have any friends added. Add some friends!",
            style: "info"
          });
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
    GolfAPI.findCourses().then(res => {
      const courseData = res.data.courses;
      const courses = this.state.courses;
      for (let i = 0; i < courseData.length; i++) {
        courses.push(courseData[i].name.toLowerCase());
      }
      this.setState({ courses: courses });
    });

    this.findFriends();
  }

  handleCourseInputChange(event) {
    this.setState({ course: event });
  }

  handleFriendInputChange(event) {
    this.setState({ friend: event });
  }

  handleCourseSubmit() {
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
    let userData = this.props.userData;
    const username = this.props.userData.username;
    const course = this.state.matchCourse;
    const players = this.state.matchFriends;
    const allPlayers = [...players, userData];

    axios
      .post("http://192.168.138.2:7777/dashboard/api/match/new", {
        course,
        allPlayers
      })
      .then(res => {
        axios
          .put("http://192.168.138.2:7777/api/users", { username })
          .then(res => {
            let userData = res.data[0];

            this.props.navigation.navigate("Current Match", {
              screen: "Match Splash",
              params: { userData: userData }
            });
          });
      });
  }

  handleFriendSubmit() {
    const friend = this.state.friend;
    const friendArr = this.state.allFriends;
    const allFriends = this.state.allFriends.map(friend => friend.username);
    const matchArr = this.state.matchFriends.map(mFriend => mFriend.username);

    if (allFriends.indexOf(friend) !== -1 && matchArr.indexOf(friend) === -1) {
      for (let i = 0; i < friendArr.length; i++) {
        if (friendArr[i].username === friend) {
          console.log(friendArr[i]);
          this.setState({
            matchFriends: [...this.state.matchFriends, friendArr[i]]
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
    const friendToDelete = event;
    const matchFriends = this.state.matchFriends;
    for (let i = 0; i < matchFriends.length; i++) {
      if (matchFriends[i].username === friendToDelete) {
        matchFriends.splice(i, 1);
      }
    }
    this.setState({ matchFriends });
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between"
        }}
        accesible={true}
      >
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
        <View
          accesible={true}
          style={{
            height: 100,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center"
          }}
        >
          <MatchCourse
            matchCourse={this.state.matchCourse}
            handleCourseDelete={this.handleCourseDelete.bind(this)}
          />
          <FriendsList
            matchFriends={this.state.matchFriends}
            handleFriendDelete={this.handleFriendDelete.bind(this)}
          />
        </View>
        <Button
          title="Start"
          titleStyle={{ color: "white", fontSize: 20 }}
          buttonStyle={{
            backgroundColor: "rgb(100, 200, 100)",

            paddingVertical: 10,
            alignSelf: "center",
            width: "75%",
            marginTop: 25
          }}
          onPress={this.handleMatchSubmit.bind(this)}
          id="start-match-btn"
        />
        {/* <Link to="/dashboard/matchView"> */}
      </View>
    );
  }
}

export default Form;
