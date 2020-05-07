import React from 'react';
import {View, Text, Button} from 'react-native';
import {Link} from 'react-router-native';
import Form from './Form';

function FormContainer() {
  return (
    <View id="form-container">
      <Form />
      <Link to="/dashboard/game/tracker">
        <Text>Start Game</Text>
      </Link>
    </View>
  );
}

export default FormContainer;
