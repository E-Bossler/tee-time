import React, { Component } from "react";
import { Button, Text } from "react-native-elements";
import axios from "axios";
import Greens from "../../GreensCSS/Greens";
import FormContainer from "./MatchForm/FormContainer";
import UserMenuContainer from "./UserData/UserMenuContainer";
import MatchView from "./MatchView/MatchView";
import style from "./stylesheet.scss";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

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
    console.log(this.props);
    this.findUserName();
  }

  findUserName() {
    const email = this.props.route.params.email;
    return axios
      .put("http://192.168.138.2:7777/api/dashboard/email", { email })
      .then(res => {
        console.log(res.data);
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
        {/* <Route exact path="/dashboard"> */}

        <Text h2>Welcome, {userData.username}</Text>
        <Text h4>Start a new match?</Text>
        <Button title="New Match" id="new-match-btn" />
        {/* <Greens /> */}
        <Text>© 2020 Ballard Study Group</Text>

        <Stack.Screen>
          {/* <Route path="/dashboard/matchForm"> */}
          <FormContainer
            userData={this.state.userData}
            username={this.state.username}
          />
        </Stack.Screen>
        <Stack.Screen>
          {/* <Route path="/dashboard/userMenu"> */}
          <UserMenuContainer
            userData={this.state.userData}
            username={this.state.username}
          />
        </Stack.Screen>
        <Stack.Screen>
          {/* <Route path="/dashboard/matchView"> */}
          <MatchView
            userData={this.state.userData}
            username={this.state.username}
          />
        </Stack.Screen>
      </>
    );
  }
}

export default Main;
