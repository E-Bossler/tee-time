import React from 'react';
import {View, TextInput} from 'react-native';

function EmailInput() {
  return (
    <View className="form-group">
      <TextInput
        label="Email Address"
        type="email"
        className="form-control"
        id="email-input"
        name="email"
        placeholder="Email"
      />
    </View>
  );
}

export default EmailInput;
