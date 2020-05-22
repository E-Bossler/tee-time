import React from 'react';
import {View} from 'react-native';
import style from './stylesheet.scss';

function Greens() {
  return (
    <View style={style} id="greens-container">
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
