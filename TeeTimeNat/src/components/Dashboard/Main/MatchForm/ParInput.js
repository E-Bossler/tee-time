import React from 'react';
import {View, TextInput} from 'react-native';

function ParInput() {
  return (
    <View className="form-group">
      <TextInput
        label="Par:"
        type="par"
        className="form-control"
        id="par-input"
        name="par"
      />
    </View>
  );
}

export default ParInput;
