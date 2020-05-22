import React from 'react';
import styles from './App.scss';
import {SafeAreaView} from 'react-native';
import {NativeRouter, Route, Switch} from 'react-router-native';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Dashboard from './src/pages/Dashboard';

const App = () => {
  console.log('Hello, world!');
  return (
    <NativeRouter>
      <SafeAreaView>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </SafeAreaView>
    </NativeRouter>
  );
};

export default App;
