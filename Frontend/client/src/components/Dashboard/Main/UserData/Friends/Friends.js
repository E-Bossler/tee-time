import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';
import "./stylesheet.css";


class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      friendName: "",
      friends: [],
      friendRequests: [],
      deleteFriend: false,
      friendToDelete: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.acceptFriend = this.acceptFriend.bind(this);
  }

  findFriends() {
    const username = this.state.username;
    axios.put("/api/dashboard/userMenu/friends", { username }).then(res => {
      const friends = res.data[0].friends;
      if (friends === undefined) {
        swal(
          "Add Friends",
          "You do not yet have any friends added. Add some friends!",
          "info"
        );
      } else {
        this.setState({ friends });
      }
    });
  }

  componentDidMount() {
    const username = this.state.username;
    this.findFriends();
    axios
      .put("/api/dashboard/userMenu/friendRequests", { username })
      .then(res => {
        const friendRequests = res.data[0].friendRequests;
        if (friendRequests === undefined) {
          swal("No Friend Requests", "Meet some fellow golfers!", "info");
        } else {
          this.setState({ friendRequests });
        }
      });
  }

  acceptFriend(e) {
    e.preventDefault();
    const request = JSON.parse(e.target.value);
    const username = this.state.username;
    const userData = this.props.userData;
    axios
      .post("/api/dashboard/userMenu/friendRequests", {
        request,
        username,
        userData,
      })
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
    const userData = this.props.userData;

    axios
      .post("/api/dashboard/userMenu/friends", { friend, user, userData })
      .then(res => {
        if (res.status === 201) {
          swal("SENT", `Friend Request sent to: ${friend}`, "success");
        } else if (res.data === "Friend not Found.") {
          swal(
            "Oh no...",
            "Unfortunately, that user does not exist.",
            "warning"
          );
        } else if (res.data === "Cannot add yourself.") {
          swal("Wait...", "You can't add yourself.", "error");
        } else if (res.data === "Already friended.") {
          swal(
            "Already friended",
            `${friend} is already your friend.`,
            "error"
          );
        } else if (res.data === "Already sent request.") {
          swal(
            "Relax",
            `${friend} hasn't responded to your request yet.`,
            "error"
          );
        }

        this.setState({ friendName: "" });
      });
  }

  handlePossibleDelete(event) {
    const friendToDelete = event.target.id;
    this.setState({ friendToDelete: friendToDelete });
  }

  handleCancel() {
    this.setState({ friendToDelete: ""});
  }

  handleDelete(event) {
    const userId = this.props.userData.id;
    const friendToDelete = event.target.id;
    axios
      .put("/api/dashboard/userMenu/deleteFriends", { friendToDelete, userId })
      .then(res => {
        console.log(res.data);
      })
    this.setState({ friendToDelete: ""});
    this.findFriends();
  }

  render() {
    return (
      <div id="friends-page">

        <div id="request-container" className="section">
          <h3>Friend Requests</h3>
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
        
        <div id="find-container" className="section">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Find Friends</label>
            <input
              onKeyDown={event => (event.keyCode === 13 ? this.addItem : "")}
              className="friend-name"
              onChange={this.handleChange.bind(this)}
            ></input>
            <button
              onKeyDown={event => (event.keyCode === 13 ? this.addItem : "")}
              type="submit"
            >
              <i className="fas fa-search fa-lg"></i>
            </button>
          </form>
        </div>
        
        <div id="friends-container" className="section">
          <h3>Your Friends</h3>
          <ul>
            {this.state.friends.map(friend => {
              return (
                <li 
                  value={this.state.friends} // why not friend.username?
                  key={friend._id}>
                  {friend.username}
                  <span
                    className={this.state.friendToDelete === friend._id ? "show" : "hide"}
                    onClick={this.handleCancel.bind(this)}
                  >
                    cancel
                  </span>
                  <button
                    id={friend._id}
                    className={this.state.friendToDelete === friend._id ? "show red" : "hide"}
                    onClick={this.handleDelete.bind(this)}
                  >
                    Delete?
                  </button>
                  <button
                    id={friend._id}
                    className={this.state.friendToDelete === friend._id ? "hide" : "show"}
                    onClick={this.handlePossibleDelete.bind(this)}
                  >
                    Friends
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      
      </div>
    );
  }
}

export default Friends;
