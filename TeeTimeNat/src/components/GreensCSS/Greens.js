import React from 'react';
import {View} from 'react-native';
import './stylesheet.scss';

function Greens() {
  return (
    <View id="greens-container">
      <View id="flag-container">
        <View id="flag" />
        <View id="pole" />
        <View id="hole" />
      </View>
      <View id="hill" />
      <View id="ball" />
    </View>
  );
}

export default Greens;
