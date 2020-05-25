import React, {Component} from 'react';
import {Divider, Input, Button, Text} from 'react-native-elements';
import FriendDatalist from './FriendDatalist';
import style from './stylesheet.scss';

class FriendsInput extends Component {
  render() {
    return (
      <Divider style={style} className="form-group">
        <FriendDatalist allFriends={this.props.allFriends} />
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
          className={this.props.friendFound ? 'hide' : 'show'}>
          Sorry, that user is not on your friends list.
        </Text>
        <Button id="add-friend-btn" onPress={this.props.handleFriendSubmit}>
          Add Friend
        </Button>
      </Divider>
    );
  }
}

export default FriendsInput;
