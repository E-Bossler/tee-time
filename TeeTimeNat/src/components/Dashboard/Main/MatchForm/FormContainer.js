import React from 'react';
import {
  View,
  Button,
  // Text,
  // StyleSheet,
  // TextInput,
  // TouchableHighlight,
} from 'react-native';
import Form from './Form';

function FormContainer() {
  return (
    <View id="form-container">
      <Form />
      <Button title="Start Game" />
    </View>
  );
}

export default FormContainer;
