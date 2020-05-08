import React from 'react';
import {NativeRouter, Switch} from 'react-router-native';
import {View} from 'react-native';
import Nav from '../components/Dashboard/Nav/Nav';
import Page from '../components/Dashboard/Main/Page';

function Dashboard() {
  return (
    <View>
      <NativeRouter>
        <Nav />
        <Switch>
          <Page />
        </Switch>
      </NativeRouter>
    </View>
  );
}

export default Dashboard;
