import React, { Component } from "react";
import "./stylesheet.css";

class FriendsList extends Component {
  render() {
    const friends = this.props.friends;
    let otherPlayers = false;
    if (friends.length > 0) {
      otherPlayers = true;
    }
    return (
      <div id="friends-list-container">
        <h3>Players:</h3>
        <p className={otherPlayers ? "hide" : "show"}>No friends added yet</p>
        <ul id="friends-list">
          {friends.map(friend => {
            return <li key={friend._id}>{friend.username}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default FriendsList;
