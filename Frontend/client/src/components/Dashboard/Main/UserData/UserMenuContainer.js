import React, { Component } from "react";
import UserMenu from "./UserMenu";

class UserMenuContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <UserMenu username={this.props.username} />
      </div>
    );
  }
}

export default UserMenuContainer;
