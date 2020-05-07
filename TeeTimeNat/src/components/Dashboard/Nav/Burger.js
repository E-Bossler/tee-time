import React from 'react';
import {View} from 'react-native';

function Burger() {
  return (
    <View id="burger">
      <View className="line toggle" id="line1" />
      <View className="line toggle" id="line2" />
      <View className="line toggle" id="line3" />
    </View>
  );
}

export default Burger;
