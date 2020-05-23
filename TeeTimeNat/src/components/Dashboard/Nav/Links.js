import React, { Component, useState } from "react";
import Collapsible from "react-native-collapsible";
import { Divider, ListItem, Button } from "react-native-elements";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLogin: false,
      collapsed: true
    };
  }

  handleLogOut() {
    this.setState({ toLogin: true });
    ///change this to redirect
    console.log(this.props);
    return this.props.navigation.popToTop();
  }

  render() {
    console.log(this.props);
    if (this.state.toLogin === true) {
      // return <Redirect exact to="/signup" />;
    }
    const collapsed = this.state.collapsed;
    return (
      <>
        <Button
          title="Menu"
          onPress={() => {
            this.setState({ collapsed: !collapsed });
          }}
          icon={{ type: "font-awesome", name: "folder" }}
        />
        <Collapsible
          enablePointerEvents={true}
          collapsed={this.state.collapsed}
        >
          {/* // id="nav-links"
        // className={this.props.burgerClicked ? "slide-left" : "slide-right"}
       */}
          <Button
            title="Current Match"
            // onPress={this.props.n}
            name="/dashboard/matchView"
          />

          <Button title="Saved Matches" name="/dashboard/userMenu/matches" />

          <Button title="New Match" name="/dashboard/matchForm" />

          <Button
            title="Logout"
            name="/"
            onPress={this.handleLogOut.bind(this)}
          />
        </Collapsible>
      </>
    );
  }
}

export default Links;
