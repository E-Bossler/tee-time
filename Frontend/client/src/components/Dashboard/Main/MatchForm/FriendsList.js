import React, { Component } from "react";
import "./stylesheet.css";

class FriendsList extends Component {
  render() {
    const friends = this.props.matchFriends;
    let friendsAdded = false;
    if (friends.length > 0) {
      friendsAdded = true;
    }

    return (
      <div id="friends-list-container">
        <h3>Match Players:</h3>
        <p className={friendsAdded ? "hide" : "show"}>No friends added yet</p>
        <ul id="friends-list">
          {friends.map(friend => {
            return (
              <li key={friend._id}>
                <p>{friend.username}</p>
                <i
                  className={"fas fa-times"}
                  id={friend.username}
                  onClick={this.props.handleFriendDelete}
                ></i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FriendsList;
