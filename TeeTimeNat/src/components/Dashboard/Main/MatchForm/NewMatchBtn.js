import React, { Component } from "react";
import { Divider, Button } from "react-native-elements";
import style from "./stylesheet.scss";

class NewMatchBtn extends Component {
  render() {
    return (
      <Divider style={style} id="match-btn-container">
        {/* <Link id="new-match-link" to="/dashboard/matchForm"> */}
        <Button id="new-match-btn">New Match</Button>
      </Divider>
    );
  }
}

export default NewMatchBtn;
