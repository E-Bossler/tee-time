import React, { Component } from "react";
import UserMenu from "./UserMenu";

class UserMenuContainer extends Component {
  render() {
    return (
      <div>
        <UserMenu
          userData={this.props.userData}
          username={this.props.username}
        />
      </div>
    );
  }
}

export default UserMenuContainer;
