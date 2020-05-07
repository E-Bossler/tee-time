import React from 'react';
import {View, Text, Button} from 'react-native';
import Form from './Form';

function FormContainer() {
  return (
    <View id="form-container">
      <Form />
      <Button>
        <Text>Start Game</Text>
      </Button>
    </View>
  );
}

export default FormContainer;
