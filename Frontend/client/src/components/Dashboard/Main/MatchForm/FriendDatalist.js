import React, { Component } from "react";

class FriendDatalist extends Component {
  render() {
    return (
      <datalist id="friends">
        {this.props.allFriends.map((friend, key) => (
          <option key={key} value={friend.username} />
        ))}
      </datalist>
    );
  }
}

export default FriendDatalist;
