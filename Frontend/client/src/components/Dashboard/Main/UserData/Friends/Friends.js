import React, { Component } from "react";
import axios from "axios";

// ADD VALIDATION SO YOU CAN'T DOUBLE ADD FRIENDS
// SEND OFF FRIEND ADD AS A REQUEST TO OTHER USER
// UPDATE USER MODEL, HAS FRIEND REQUEST ARRAY
// ALLOW FRIEND ADD, DECLINE FRIEND ADD
class Friends extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      username: this.props.username,
      friendName: "",
      friends: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const user = this.state.username;
    axios.put("/api/dashboard/userMenu/friends", { user }).then(res => {
      const friends = res.data[0].Friends;
      this.setState({ friends });
    });
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ friendName: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const friend = this.state.friendName;
    const friends = this.state.friends;
    const user = this.state.username;

    axios
      .post("/api/dashboard/userMenu/friends", { friend, user })
      .then(res => {
        if (res.data === "Friend added!") {
          this.setState({ friends: [...friends, friend] });
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
          <input className="friend-name" onChange={this.handleChange}></input>
        </form>

        <h2>Your Friends</h2>
        <ul>
          {this.state.friends.map((friend, i) => {
            return <li key={i}>{friend}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Friends;
