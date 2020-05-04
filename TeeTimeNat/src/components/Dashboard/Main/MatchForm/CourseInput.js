import React from 'react';
import {
  View,
  // Text,
  // StyleSheet,
  TextInput,
  // TouchableHighlight,
} from 'react-native';

function CourseInput() {
  return (
    <View className="form-group">
      <TextInput
        label="CourView"
        type="course"
        className="form-control"
        id="course-input"
        name="course"
      />
    </View>
  );
}

export default CourseInput;
