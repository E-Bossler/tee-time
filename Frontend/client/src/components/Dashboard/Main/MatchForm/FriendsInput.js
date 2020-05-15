import React, { Component } from "react";
import "./stylesheet.css";

class FriendsInput extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="friends-input">Find Friends:</label>
        <input
          type="text"
          className="form-control"
          id="friends-input"
          name="friend"
          defaultValue={this.props.friendName}
          onChange={this.props.handleInputChange}
        ></input>
        <button id="add-friend-btn" onClick={this.props.handleSubmit}>
          Add Friend
        </button>
      </div>
    );
  }
}

export default FriendsInput;
