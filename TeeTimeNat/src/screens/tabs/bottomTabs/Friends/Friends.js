import React, { Component } from "react";
import { View } from "react-native";
import { Text, ListItem, Button, Input } from "react-native-elements";
import axios from "axios";
import SweetAlert from "react-native-sweet-alert";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      friendName: "",
      friends: [],
      friendRequests: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.acceptFriend = this.acceptFriend.bind(this);
  }

  componentDidMount() {
    const username = this.props.userData.username;
    axios
      .put("http://192.168.138.2:7777/api/dashboard/userMenu/friends", {
        username
      })
      .then(res => {
        const friends = res.data[0].friends;
        if (friends === undefined) {
          SweetAlert.showAlertWithOptions({
            title: "Add Friends",
            subTitle:
              "You do not yet have any friends added. Add some friends!",
            style: "info"
          });
        } else {
          this.setState({ friends });
        }
      });

    axios
      .put("http://192.168.138.2:7777/api/dashboard/userMenu/friendRequests", {
        username
      })
      .then(res => {
        const friendRequests = res.data[0].friendRequests;
        if (friendRequests === undefined) {
          SweetAlert("No Friend Requests", "Meet some fellow golfers!", "info");
        } else {
          this.setState({ friendRequests });
        }
      });
  }

  acceptFriend(e) {
    const request = e;
    const username = this.props.userData.username;
    const userData = this.props.userData;

    axios
      .post("http://192.168.138.2:7777/api/dashboard/userMenu/friendRequests", {
        request,
        username,
        userData
      })
      .then(res => {
        const request = JSON.parse(res.config.data);
        const newFriend = request.request;
        const newFriendsArray = [...this.state.friends, newFriend];
        const filteredArray = this.state.friendRequests.filter(
          i => i._id !== newFriend._id
        );
        this.setState({
          friendRequests: filteredArray
        });
        this.setState({ friends: newFriendsArray });
      });
  }

  handleChange(e) {
    const value = e;

    this.setState({ friendName: value });
  }

  handleSubmit() {
    const friend = this.state.friendName;
    const user = this.props.userData.username;
    const userData = this.props.userData;

    axios
      .post("http://192.168.138.2:7777/api/dashboard/userMenu/friends", {
        friend,
        user,
        userData
      })
      .then(res => {
        if (res.status === 201) {
          SweetAlert.showAlertWithOptions({
            title: "SENT",
            subTitle: `Friend Request sent to: ${friend}`,
            style: "success"
          });
        } else if (res.data === "Friend not Found.") {
          SweetAlert.showAlertWithOptions({
            title: "Oh no...",
            subTitle: "Unfortunately, that user does not exist.",
            style: "warning"
          });
        } else if (res.data === "Cannot add yourself.") {
          SweetAlert.showAlertWithOptions({
            title: "Wait...",
            subTitle: "You can't add yourself.",
            style: "error"
          });
        } else if (res.data === "Already friended.") {
          SweetAlert.showAlertWithOptions({
            title: "Already friended",
            subTitle: `${friend} is already your friend.`,
            style: "error"
          });
        } else if (res.data === "Already sent request.") {
          SweetAlert.showAlertWithOptions({
            title: "Relax",
            subTitle: `${friend} hasn't responded to your request yet.`,
            style: "error"
          });
        }

        this.setState({ friendName: "" });
      });
  }

  render() {
    return (
      <>
        <Text h2>Friends</Text>
        <View>
          <Input
            label="Find Friends!"
            className="friend-name"
            onChangeText={this.handleChange.bind(this)}
          />
          <Button
            title="Find Friend"
            buttonStyle={{ backgroundColor: "rgb(100, 200, 100)" }}
            onPress={this.handleSubmit.bind(this)}
          />
        </View>

        <Text h2>Your Friends</Text>
        <View>
          {this.state.friends.map(friend => {
            return <ListItem title={friend.username} key={friend._id} />;
          })}
        </View>
        <Text h2>Friend Requests</Text>
        <View>
          {this.state.friendRequests.map(friendRequest => {
            return (
              <View key={friendRequest._id + 2}>
                <ListItem
                  title={friendRequest.username}
                  titleStyle={{ textAlign: "center" }}
                  key={friendRequest._id}
                  rightIcon={{
                    name: "plus",
                    type: "font-awesome",
                    onPress: () => this.acceptFriend(friendRequest)
                  }}
                />
              </View>
            );
          })}
        </View>
      </>
    );
  }
}

export default Friends;
