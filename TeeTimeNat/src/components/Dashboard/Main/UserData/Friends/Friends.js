import React, {Component} from 'react';
import {Divider, Text, ListItem, Button, Input} from 'react-native-elements';
import axios from 'axios';
import SweetAlert from 'react-native-sweet-alert';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      friendName: '',
      friends: [],
      friendRequests: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.acceptFriend = this.acceptFriend.bind(this);
  }

  componentDidMount() {
    const username = this.state.username;
    axios.put('/api/dashboard/userMenu/friends', {username}).then(res => {
      const friends = res.data[0].friends;
      if (friends === undefined) {
        SweetAlert.showAlertWithOptions({
          title: 'Add Friends',
          subTitle: 'You do not yet have any friends added. Add some friends!',
          style: 'info',
        });
      } else {
        this.setState({friends});
      }
    });

    axios
      .put('/api/dashboard/userMenu/friendRequests', {username})
      .then(res => {
        const friendRequests = res.data[0].friendRequests;
        if (friendRequests === undefined) {
          SweetAlert('No Friend Requests', 'Meet some fellow golfers!', 'info');
        } else {
          this.setState({friendRequests});
        }
      });
  }

  acceptFriend(e) {
    e.preventDefault();
    const request = JSON.parse(e.target.value);
    const username = this.state.username;
    const userData = this.props.userData;
    axios
      .post('/api/dashboard/userMenu/friendRequests', {
        request,
        username,
        userData,
      })
      .then(res => {
        const request = JSON.parse(res.config.data);
        const newFriend = request.request;
        const newFriendsArray = [...this.state.friends, newFriend];
        const filteredArray = this.state.friendRequests.filter(
          i => i._id !== newFriend._id,
        );
        this.setState({
          friendRequests: filteredArray,
        });
        this.setState({friends: newFriendsArray});
      });
  }

  handleChange(e) {
    const {value} = e.target;
    this.setState({friendName: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const friend = this.state.friendName;
    const user = this.state.username;
    const userData = this.props.userData;

    axios
      .post('/api/dashboard/userMenu/friends', {friend, user, userData})
      .then(res => {
        if (res.status === 201) {
          SweetAlert.showAlertWithOptions({
            title: 'SENT',
            subTitle: `Friend Request sent to: ${friend}`,
            style: 'success',
          });
        } else if (res.data === 'Friend not Found.') {
          SweetAlert.showAlertWithOptions({
            title: 'Oh no...',
            subTitle: 'Unfortunately, that user does not exist.',
            style: 'warning',
          });
        } else if (res.data === 'Cannot add yourself.') {
          SweetAlert.showAlertWithOptions({
            title: 'Wait...',
            subTitle: "You can't add yourself.",
            style: 'error',
          });
        } else if (res.data === 'Already friended.') {
          SweetAlert.showAlertWithOptions({
            title: 'Already friended',
            subTitle: `${friend} is already your friend.`,
            style: 'error',
          });
        } else if (res.data === 'Already sent request.') {
          SweetAlert.showAlertWithOptions({
            title: 'Relax',
            subTitle: `${friend} hasn't responded to your request yet.`,
            style: 'error',
          });
        }

        this.setState({friendName: ''});
      });
  }

  render() {
    return (
      <Divider>
        <Text h2>Friends</Text>
        <Divider>
          <Input
            label="Find Friends!"
            className="friend-name"
            onChange={this.handleChange.bind(this)}
            onSubmitEditing={this.handleSubmit.bind(this)}
          />
          <Button type="submit" />
        </Divider>

        <Text h2>Your Friends</Text>
        <Divider>
          {this.state.friends.map(friend => {
            return (
              <ListItem value={this.state.friends} key={friend._id}>
                {friend.username}
              </ListItem>
            );
          })}
        </Divider>
        <Text h2>Friend Requests</Text>
        <Divider>
          {this.state.friendRequests.map(friendRequest => {
            return (
              <Divider key={friendRequest._id + 2}>
                <ListItem key={friendRequest._id}>
                  {friendRequest.username}
                </ListItem>
                <Button
                  onPress={this.acceptFriend}
                  key={friendRequest._id + 1}
                  value={JSON.stringify(friendRequest)}>
                  Add Friend
                </Button>
              </Divider>
            );
          })}
        </Divider>
      </Divider>
    );
  }
}

export default Friends;
