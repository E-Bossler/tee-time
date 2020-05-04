import React from 'react';
import {
  View,
  // Text,
  // StyleSheet,
  // TextInput,
  // TouchableHighlight,
} from 'react-native';
import Form from '../components/Login/Form';
import Greens from '../components/GreensCSS/Greens';

function Login() {
  return (
    <View>
      <Form />
      <Greens />
    </View>
  );
}

export default Login;
