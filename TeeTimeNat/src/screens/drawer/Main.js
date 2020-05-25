import React, { Component } from "react";
import { Button, Text } from "react-native-elements";
import axios from "axios";

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
    this.findUserName();
  }

  findUserName() {
    const email = this.props.route.params.email;
    console.log(email);
    return axios
      .put("http://192.168.138.2:7777/api/dashboard/email", { email })
      .then(res => {
        const userData = {
          username: res.data[0].username,
          email: res.data[0].email,
          id: res.data[0]._id,
          currentMatchId: "",
          currentCourse: "",
          currentCoursePlayers: ""
        };

        if (res.data[0].currentMatch === undefined) {
          console.log("no current match");
        } else {
          userData.currentMatchId = res.data[0].currentMatch.courseId;
          userData.currentCourse = res.data[0].currentMatch.courseName;
          userData.currentCoursePlayers = res.data[0].currentMatch.players;
        }

        this.setState({ userData });
      });
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
