import React from 'react';
import {View, TextInput} from 'react-native';

function PasswordInput() {
  return (
    <View className="form-group">
      <TextInput
        label="Password:"
        type="password"
        className="form-control"
        id="password-input"
        name="password"
        placeholder="Password"
      />
    </View>
  );
}

export default PasswordInput;
