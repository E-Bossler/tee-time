import React from 'react';
import {
  View,
  // Text,
  // StyleSheet,
  // TextInput,
  // TouchableHighlight,
} from 'react-native';
import Form from '../components/Signup/Form';
import Greens from '../components/GreensCSS/Greens';

function Signup() {
  return (
    <View>
      <Form />
      <Greens />
    </View>
  );
}

export default Signup;
