import React from 'react';
import {View} from 'react-native';
import {NativeRouter, Route, Switch} from 'react-router-native';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Dashboard from './src/pages/Dashboard';

const App = () => (
  <NativeRouter>
    <View>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </View>
  </NativeRouter>
);

export default App;
