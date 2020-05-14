import React, { Component } from "react";
import axios from "axios";

// ADD VALIDATION SO YOU CAN'T DOUBLE ADD FRIENDS
// SEND OFF FRIEND ADD AS A REQUEST TO OTHER USER
// UPDATE USER MODEL, HAS FRIEND REQUEST ARRAY
// ALLOW FRIEND ADD, DECLINE FRIEND ADD
class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      friendName: "",
      friends: [],
      friendRequests: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.acceptFriend = this.acceptFriend.bind(this);
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

    axios.put("/api/dashboard/userMenu/friendRequests", { user }).then(res => {
      const friendRequests = res.data[0].friendRequests;
      if (friendRequests === undefined) {
        alert("No friend requests yet - golf more!");
      } else {
        this.setState({ friendRequests });
      }
    });
  }

  acceptFriend(e) {
    e.preventDefault();
    const request = JSON.parse(e.target.value);
    const user = this.state.username;
    axios
      .post("/api/dashboard/userMenu/friendRequests", { request, user })
      .then(res => {
        const request = JSON.parse(res.config.data);
        const newFriend = request.request;
        const newFriendsArray = [...this.state.friends, newFriend];

        const filteredArray = this.state.friendRequests.filter(
          i => i._id !== newFriend._id
        );
        this.setState({
          friendRequests: filteredArray,
        });
        this.setState({ friends: newFriendsArray });
      });
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ friendName: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const friend = this.state.friendName;
    const user = this.state.username;

    axios
      .post("/api/dashboard/userMenu/friends", { friend, user })
      .then(res => {
        if (res.data !== "Friend not Found.") {
          alert(`Friend Request sent to: ${friend}`);
        } else if (res.data === "Friend not Found.") {
          alert("You have added a friend that isn't in our records.");
        }
      });

    this.setState({ friendName: "" });
  }

  render() {
    return (
      <div>
        <h2>Friends</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Find Friends!</label>
          <input
            onKeyDown={event => (event.keyCode === 13 ? this.addItem : "")}
            className="friend-name"
            onChange={this.handleChange}
          ></input>
          <input
            onKeyDown={event => (event.keyCode === 13 ? this.addItem : "")}
            type="submit"
          ></input>
        </form>

        <h2>Your Friends</h2>
        <ul>
          {this.state.friends.map(friend => {
            return (
              <li value={this.state.friends} key={friend._id}>
                {friend.username}
              </li>
            );
          })}
        </ul>
        <h2>Friend Requests</h2>
        <ul>
          {this.state.friendRequests.map(friendRequest => {
            return (
              <div key={friendRequest._id + 2}>
                <li key={friendRequest._id}>{friendRequest.username}</li>
                <button
                  onClick={this.acceptFriend}
                  key={friendRequest._id + 1}
                  value={JSON.stringify(friendRequest)}
                >
                  Add Friend
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Friends;
