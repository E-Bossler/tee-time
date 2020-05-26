import React, { Component } from "react";
import { Button, Text } from "react-native-elements";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userData: {},
      toLogin: false
    };
  }

  componentDidMount() {
    console.log("Main props", this.props);
    const userData = this.props.route.params.userData;
    this.setState({ userData });
  }

  render() {
    if (this.state.toLogin === true) {
      //return <Redirect to="/" />
    }
    const userData = this.state.userData;
    return (
      <>
        <Text h2>Welcome, {userData.username}</Text>
        <Text h4>Start a new match?</Text>
        <Button
          title="New Match"
          id="new-match-btn"
          onPress={() => {
            this.props.navigation.navigate("New Match", { userData });
          }}
        />

        <Text>© 2020 Ballard Study Group</Text>
      </>
    );
  }
}

export default Main;
