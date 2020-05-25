import React, { Component } from "react";
import { Input, Button, Text } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown";

class FriendsInput extends Component {
  render() {
    return (
      <>
        <Dropdown
          label="Friends"
          data={this.props.allFriends.map(friend => friend.username)}
        />
        <Input
          list="friends"
          type="text"
          label="Find Friends:"
          className="form-control"
          id="friends-input"
          name="friend"
          value={this.props.friend}
          onChange={this.props.handleFriendInputChange}
        />
        <Text
          id="not-found-msg"
          className={this.props.friendFound ? "hide" : "show"}
        >
          Sorry, that user is not on your friends list.
        </Text>
        <Button
          id="add-friend-btn"
          title="Add Friend"
          onPress={this.props.handleFriendSubmit}
        />
      </>
    );
  }
}

export default FriendsInput;
