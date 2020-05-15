import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CourseInput from "./CourseInput";
import FriendsInput from "./FriendsInput";
import FriendsList from "./FriendsList";
import "./stylesheet.css";

const findUser = (friend, friends, user) => {
  axios.post("/api/dashboard/userMenu/friends", { friend, user }).then(res => {
    console.log(res.data);
    if (res.data === "Friend added!") {
      this.setState({ friends: [...friends, friend] });
    } else if (res.data === "Friend not Found.") {
      console.log("Friend not found");
    }
  });
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      friendName: "",
      friends: [],
    };
  }

  componentDidMount() {
    const user = this.state.username;
    axios.put("/api/dashboard/userMenu/friends", { user }).then(res => {
      const friends = res.data[0].friends;
      if (friends === undefined) {
        alert("You don't have any friends! Add friends to become popular!");
      } else {
        this.setState({ friends });
      }
    });
  }

  handleInputChange(event) {
    let value = event.target.value;
    this.setState({ friend: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const friend = this.state.friendName;
    const friends = this.state.friends;
    const user = this.state.username;
    friends.push(this.state.friend);
    this.setState({ friends });

    console.log(friend, user);

    this.setState({ friendName: "" });
  }

  render() {
    return (
      <div id="form">
        <CourseInput />
        <FriendsInput
          handleSubmit={this.handleSubmit.bind(this)}
          handleInputChange={this.handleInputChange.bind(this)}
          friendName={this.state.friendName}
        />
        <FriendsList friends={this.state.friends} />
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
