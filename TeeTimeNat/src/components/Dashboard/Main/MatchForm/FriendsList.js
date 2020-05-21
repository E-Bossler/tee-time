import React, {Component} from 'react';
import {Divider, Text, Icon, ListItem} from 'react-native-elements';
import './stylesheet.css';

class FriendsList extends Component {
  render() {
    const friends = this.props.matchFriends;
    let friendsAdded = false;
    if (friends.length > 0) {
      friendsAdded = true;
    }

    return (
      <Divider id="friends-list-container">
        <Text h3>Match Players:</Text>
        <Text className={friendsAdded ? 'hide' : 'show'}>
          No friends added yet
        </Text>
        <Divider id="friends-list">
          {friends.map(friend => {
            return (
              <ListItem key={friend._id}>
                <Text>{friend.username}</Text>
                <Icon
                  className={'fas fa-times'}
                  id={friend.username}
                  onPress={this.props.handleFriendDelete}
                />
              </ListItem>
            );
          })}
        </Divider>
      </Divider>
    );
  }
}

export default FriendsList;
