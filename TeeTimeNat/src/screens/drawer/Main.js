import React, { Component } from "react";
import { View } from "react-native";
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
    const userData = this.props.route.params.userData;
    this.setState({ userData });
  }

  render() {
    if (this.state.toLogin === true) {
      //return <Redirect to="/" />
    }
    const userData = this.props.route.params.userData;
    return (
      <>
        <Text
          style={{
            alignSelf: "center",
            textAlign: "center",
            marginVertical: 20
          }}
          h2
        >
          Welcome, {userData.username}
        </Text>
        <Text style={{ alignSelf: "center", marginVertical: 20 }} h4>
          Start a new match?
        </Text>
        <View
          style={{
            width: "75%",
            alignSelf: "center",

            marginBottom: 25
          }}
        >
          <Button
            title="New Match"
            id="new-match-btn"
            titleStyle={{ color: "white", fontSize: 20 }}
            buttonStyle={{
              backgroundColor: "rgb(100, 200, 100)",

              paddingVertical: 10
            }}
            onPress={() => {
              this.props.navigation.navigate("New Match", { userData });
            }}
          />
        </View>

        <Text style={{ alignSelf: "center" }}>© 2020 Ballard Study Group</Text>
      </>
    );
  }
}

export default Main;
