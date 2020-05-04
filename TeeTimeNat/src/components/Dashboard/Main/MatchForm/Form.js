import React from 'react';
import {
  View,
  // Text,
  // StyleSheet,
  // TextInput,
  // TouchableHighlight,
} from 'react-native';
import CourseInput from './CourseInput';
import ParInput from './ParInput';
import FriendsInput from './FriendsInput';

function Form() {
  return (
    <View>
      <CourseInput />
      <ParInput />
      <FriendsInput />
    </View>
  );
}

export default Form;
