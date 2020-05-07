import React from 'react';
import {View} from 'react-native';
import {Route} from 'react-router-native';
import Tracker from './Tracker';
import Chat from './Chat';
import Stats from './TabsContainer';

function TabsContainer() {
  return (
    <View>
      <Route path="/dashboard/game/tracker">
        <Tracker />
      </Route>

      <Route path="/dashboard/game/chat">
        <Chat />
      </Route>

      <Route path="/dashboard/game/stats">
        <Stats />
      </Route>
    </View>
  );
}

export default TabsContainer;
