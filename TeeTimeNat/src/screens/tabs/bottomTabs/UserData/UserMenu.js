import React, { Component } from "react";
import { Divider } from "react-native-elements";
// import Stats from "./Stats/Stats";
import { createStackNavigator } from "@react-navigation/stack";
import Courses from "../Courses/Courses";
import Friends from "../Friends/Friends";
import Matches from "../../../drawer/Matches/Matches";

const Stack = createStackNavigator();

class UserMenu extends Component {
  /* <Route path="/dashboard/userMenu/stats"> */
  /* <Route path="/dashboard/userMenu/courses"> */
  /* <Route path="/dashboard/userMenu/friends"> */
  /* <Route path="/dashboard/userMenu/matches"> */
  render() {
    return (
      <>
        {/* <Stats userData={this.props.userData} /> */}
        <Stack.Navigator>
          <Stack.Screen name="Courses">
            {props => <Courses {...props} />}
          </Stack.Screen>

          <Stack.Screen name="Friends">
            {props => <Friends {...props} />}
          </Stack.Screen>

          <Stack.Screen name="Matches">
            {props => <Matches {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </>
    );
  }
}

export default UserMenu;
