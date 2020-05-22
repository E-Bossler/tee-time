import React, { Component } from "react";
// import Button from "react-native";
import { Divider, ListItem, Button } from "react-native-elements";
import { setInStorage } from "../../utils/storage";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLogin: false
    };
  }

  handleLogOut(e) {
    e.preventDefault();
    setInStorage("", {});
    this.setState({ toLogin: true });
    ///change this to redirect
    window.location.href = "/login";
  }

  render() {
    if (this.state.toLogin === true) {
      return <Redirect exact to="/signup" />;
    }

    return (
      <Divider
      // id="nav-links"
      // className={this.props.burgerClicked ? "slide-left" : "slide-right"}
      >
        <Button title="Current Match" name="/dashboard/matchView" />

        <Button title="Saved Matches" name="/dashboard/userMenu/matches" />

        <Button title="New Match" name="/dashboard/matchForm" />

        <Button
          title="Logout"
          name="/"
          onPress={() => {
            this.handleLogOut;
          }}
        />
      </Divider>
    );
  }
}

export default Links;
