import React, { Component } from "react";
import { Button, Text } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown";
import style from "./stylesheet.scss";

class FriendsInput extends Component {
  render() {
    const friendNames = this.props.allFriends.map(friend => friend);
    const data = [];
    friendNames.map(friend => {
      data.push({ value: friend.username });
    });

    return (
      <>
        <Dropdown
          label="Find Friends:"
          onChangeText={this.props.handleFriendInputChange}
          useNativeDriver={false}
          data={data}
        />

        <Text
          id="not-found-msg"
          style={this.props.friendFound ? style.hide : { color: "red" }}
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
