import React from 'react';
import {
  View,
  Text,
  // StyleSheet,
  // TextInput,
  // TouchableHighlight,
} from 'react-native';
import Burger from './Burger';

function Banner() {
  return (
    <View id="banner">
      <Text>Tee-Time</Text>
      <Burger />
    </View>
  );
}

export default Banner;
