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
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </View>
  </NativeRouter>
);

export default App;
