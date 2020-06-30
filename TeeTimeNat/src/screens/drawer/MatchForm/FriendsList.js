import React, { Component } from "react";
import { View } from "react-native";
import { Text, ListItem } from "react-native-elements";
// import style from "./stylesheet.scss";

class FriendsList extends Component {
  render() {
    const friends = this.props.matchFriends;
    console.log(friends, "friends");
    let friendsAdded = false;
    if (friends.length > 0) {
      friendsAdded = true;
    }

    return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginHorizontal: 10
        }}
      >
        <Text h4>Match Players</Text>
        <Text style={friendsAdded ? { display: "none " } : { color: "red" }}>
          No friends added yet
        </Text>

        {friends.map(friend => (
          <ListItem
            containerStyle={{ width: "100%", height: 50 }}
            key={friend.friendId}
            subtitle={friend.username}
            titleStyle={{ fontSize: 10 }}
            rightIcon={{
              onPress: () => this.props.handleFriendDelete(friend.username),
              name: "undo",
              type: "font-awesome"
            }}
          />
        ))}
      </View>
    );
  }
}

export default FriendsList;
