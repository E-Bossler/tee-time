import React, { Component } from "react";
import { Divider, Text, Icon, ListItem } from "react-native-elements";
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
        <Divider id="friends-list">
          {friends.map(friend => {
            <ListItem
              key={friend.Id}
              title={friends.username}
              rightIcon={{ name: "delete", type: "font-awesome-5" }}
            />;
          })}
        </Divider>
      </>
    );
  }
}

export default FriendsList;
