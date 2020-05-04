import React from 'react';
import {
  View,
  // Text,
  // StyleSheet,
  // TextInput,
  // TouchableHighlight,
} from 'react-native';
import Header from '../components/Dashboard/Header/Header';
import Page from '../components/Dashboard/Main/Page';
import Chat from '../components/Dashboard/Main/MatchView/Tabs/Chat';

function Dashboard() {
  return (
    <View>
      <Header />
      <Page />
      <Chat />
    </View>
  );
}

export default Dashboard;
