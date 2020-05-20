import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';

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
    const username = this.state.username;
    axios.put("/api/dashboard/userMenu/friends", { username }).then(res => {
      const friends = res.data[0].friends;
      if (friends === undefined) {
        swal("Add Friends", "You do not yet have any friends added. Add some friends!", 'info');
      } else {
        this.setState({ friends });
      }
    });

    axios
      .put("/api/dashboard/userMenu/friendRequests", { username })
      .then(res => {
        const friendRequests = res.data[0].friendRequests;
        if (friendRequests === undefined) {
          swal("No Friend Requests", "Meet some fellow golfers!", 'info');
        } else {
          this.setState({ friendRequests });
        }
      });
  }

  acceptFriend(e) {
    e.preventDefault();
    const request = JSON.parse(e.target.value);
    const username = this.state.username;
    axios
      .post("/api/dashboard/userMenu/friendRequests", { request, username })
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
        if (res.status === 201) {
          swal("SENT", `Friend Request sent to: ${friend}`, 'success');
        } else if (res.data === "Friend not Found.") {
          swal(":(", "Unfortunately, that user does not exist.", 'warning');
        } else if (res.data === "Cannot add yourself.") {
          swal("Wait...", "You can't add yourself.","error")
        } else if (res.data === "Already friended.") {
          swal("Can't do that!", `${friend} is already your friend.`, "error")
        } else if (res.data === "Already sent request.") {
          swal("Relax", `${friend} hasn't responded to your request yet.`,"error")
        }

        this.setState({ friendName: "" });
      });
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
