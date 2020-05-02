import React, {Component} from 'react';
import io from 'socket.io-client';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class Chatroom extends Component {
  componentDidMount() {
    const socket = io('http//192.168.1.1:7777');
  }

  render() {
    return (
      <View>
        <Text>Test 1 2 3</Text>
      </View>
    );
  }
}

const styles = Stylesheet.create({});
