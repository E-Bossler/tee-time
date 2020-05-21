import React, {Component} from 'react';
import {Divider, ListItem} from 'react-native-elements';

class FriendDatalist extends Component {
  render() {
    return (
      ///this was a datalist
      <Divider id="friends">
        {this.props.allFriends.map((friend, key) => (
          <ListItems key={key} value={friend.username} />
        ))}
      </Divider>
    );
  }
}

export default FriendDatalist;
