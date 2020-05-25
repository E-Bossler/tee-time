import React, {Component} from 'react';
import {Divider} from 'react-native-elements';
import UserMenu from './UserMenu';

class UserMenuContainer extends Component {
  render() {
    return (
      <Divider>
        <UserMenu
          userData={this.props.userData}
          username={this.props.username}
        />
      </Divider>
    );
  }
}

export default UserMenuContainer;
