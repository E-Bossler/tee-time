import React from 'react';
import {View, TextInput} from 'react-native';

function FriendsInput() {
  return (
    <View className="form-group">
      <TextInput
        label="Friends:"
        type="friends"
        className="form-control"
        id="friends-input"
        name="friends"
      />
    </View>
  );
}

export default FriendsInput;
