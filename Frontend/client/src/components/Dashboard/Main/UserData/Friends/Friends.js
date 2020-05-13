import React, { Component } from "react";
import axios from "axios";

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

    axios.get("/api/dashboard/userMenu/friends", { user }).then(res => {
      console.log(res.data);
    });
  }

  handleChange(e) {
    const { value } = e.target;

    this.setState({ friendName: value });
    console.log(this.state.friendName);
  }

  handleSubmit(e) {
    e.preventDefault();

    const friend = this.state.friendName;
    const user = this.state.username;

    axios
      .post("/api/dashboard/userMenu/friends", { friend, user })
      .then(res => {
        console.log(res.data);
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
          {this.state.friends.map(friend => {
            return <li key={friend._id}>{friend.email}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Friends;
