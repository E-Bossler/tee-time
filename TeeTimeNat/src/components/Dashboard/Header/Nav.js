import React from 'react';
import {
  View,
  // Text,
  // StyleSheet,
  // TextInput,
  // TouchableHighlight,
} from 'react-native';
import Banner from './Banner';
import Slider from './Slider';

function Nav() {
  return (
    <View>
      <Banner />
      <Slider />
    </View>
  );
}

export default Nav;
