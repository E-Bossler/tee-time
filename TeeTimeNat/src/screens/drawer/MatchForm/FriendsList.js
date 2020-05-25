import React, { Component } from "react";
import { View } from "react-native";
import { Text, ListItem } from "react-native-elements";
import style from "./stylesheet.scss";

class FriendsList extends Component {
  render() {
    const friends = this.props.matchFriends;
    let friendsAdded = false;
    if (friends.length > 0) {
      friendsAdded = true;
    }

    return (
      <>
        <Text h4>Match Players:</Text>
        <Text style={friendsAdded ? style.hide : { color: "red" }}>
          No friends added yet
        </Text>
        <View id="friends-list">
          {friends.map(friend => (
            <ListItem
              key={friend.friendId}
              title={friend.username}
              // value={friend.username}
              rightIcon={{
                onPress: () => this.props.handleFriendDelete(friend.username),
                name: "undo",
                type: "font-awesome"
              }}
            />
          ))}
        </View>
      </>
    );
  }
}

export default FriendsList;
