import 'react-native-gesture-handler';
import React from 'react';
import styles from './App.scss';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {NativeRouter as Router, Route, Switch} from 'react-router-native';
import LogInForm from './src/components/Login/LogInForm';
import SignUpForm from './src/components/Signup/SignUpForm';
import Dashboard from './src/pages/Dashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TeeTime">
          {props => <LogInForm {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Signup">
          {props => <SignUpForm {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
      {/* <Switch> */}
      {/* <Route exact path="/"> */}

      {/* </Route> */}
      {/* <Route exact path="/login"> */}

      {/* </Route> */}
      {/* <Route exact path="/signup"> */}

      {/* </Route> */}
      {/* <Route exact path="/dashboard"> */}

      {/* </Route> */}
      {/* </Switch> */}
    </NavigationContainer>
  );
};

export default App;
