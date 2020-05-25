import "react-native-gesture-handler";
import React, { Component } from "react";
import styles from "./App.scss";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Stack Navigator
import LogInForm from "./src/screens/stacks/Login/LogInForm";
import SignUpForm from "./src/screens/stacks/Signup/SignUpForm";

// Drawer Navigator
import Matches from "./src/screens/drawer/Matches/Matches";
import Main from "./src/screens/drawer/Main";
import MatchForm from "./src/screens/drawer/MatchForm/Form";

// Bottom Tabs Navigator
import Courses from "./src/screens/tabs/bottomTabs/Courses/Courses";
import Friends from "./src/screens/tabs/bottomTabs/Friends/Friends";
import Stats from "./src/screens/tabs/bottomTabs/Stats/Stats";

// Top Tabs Navigator
import Chat from "./src/screens/tabs/topTabs/Chat/Chat";
import MatchSplash from "./src/screens/tabs/topTabs/MatchSplash/MatchSplash";
import Scoreboard from "./src/screens/tabs/topTabs/Scoreboard/Scoreboard";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MatBottomTabs = createMaterialBottomTabNavigator();
const MatTopTabs = createMaterialTopTabNavigator();

class App extends Component {
  createMainDrawer = props => {
    console.log(props);
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" {...this.props} component={Main} />
        <Drawer.Screen name="New Match" component={MatchForm} />
        <Drawer.Screen
          name="Current Match"
          children={this.createMatchTopTabs}
        />
        <Drawer.Screen name="Saved Matches" component={Matches} />
        <Drawer.Screen name="Logout" component={LogInForm} />
      </Drawer.Navigator>
    );
  };

  createMatchTopTabs = () => (
    <MatTopTabs.Navigator>
      <MatTopTabs.Screen
        name="Match Splash"
        option={{ title: "Current Match" }}
        component={MatchSplash}
      />
      <MatTopTabs.Screen
        name="Chat"
        option={{ title: "Chat" }}
        component={Chat}
      />
      <MatTopTabs.Screen
        name="Scoreboard"
        option={{ title: "Score" }}
        component={Scoreboard}
      />
    </MatTopTabs.Navigator>
  );

  createMatchBottomTabs = () => (
    <MatBottomTabs.Navigator>
      <MatBottomTabs
        name="Stats"
        option={{ title: "Stats" }}
        component={Stats}
      />
      <MatBottomTabs
        name="Friends"
        option={{ title: "Friends" }}
        component={Friends}
      />
      <MatBottomTabs
        name="Courses"
        option={{ title: "Courses" }}
        component={Courses}
      />
    </MatBottomTabs.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="TeeTime">
            {props => <LogInForm {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Signup">
            {props => <SignUpForm {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Dashboard" children={this.createMainDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
