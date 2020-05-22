import React, { Component } from "react";
import { Divider, Text } from "react-native-elements";

import Burger from "./Burger";

class Banner extends Component {
  render() {
    // console.log(this.props.message);
    //<Link to="/dashboard/matchView">Tee Time</Link>
    return (
      <Divider id="banner">
        <Text h2>Tee Time</Text>
        <Burger
          animate={this.props.action}
          burgerClicked={this.props.clicked}
        />
      </Divider>
    );
  }
}

export default Banner;
