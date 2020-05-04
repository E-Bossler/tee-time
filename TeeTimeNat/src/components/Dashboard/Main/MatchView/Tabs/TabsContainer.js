import React from 'react';
import {
  View,
  // Text,
  // StyleSheet,
  // TextInput,
  // TouchableHighlight,
} from 'react-native';
import Tracker from './Tracker';
import Chat from './Chat';
import ScoreBoard from './ScoreBoard';

function TabsContainer() {
  return (
    <View>
      <Tracker />
      <Chat />
      <ScoreBoard />
    </View>
  );
}

export default TabsContainer;
