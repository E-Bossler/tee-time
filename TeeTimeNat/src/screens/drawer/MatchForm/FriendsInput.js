import React, { Component } from "react";
import { ScrollView } from "react-native";
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
      <ScrollView>
        <Dropdown
          label="Find Friends:"
          fontSize={20}
          animationDuration={100}
          baseColor={"rgb(100, 200, 100)"}
          textColor={"rgb(0, 0, 0)"}
          containerStyle={{ width: "85%", alignSelf: "center" }}
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
          titleStyle={{ color: "white" }}
          buttonStyle={{
            backgroundColor: "rgb(100, 200, 100)",

            paddingVertical: 10,
            alignSelf: "center",
            width: "75%",
            marginTop: 25
          }}
          onPress={this.props.handleFriendSubmit}
        />
      </ScrollView>
    );
  }
}

export default FriendsInput;
