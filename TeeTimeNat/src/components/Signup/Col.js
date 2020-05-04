import React from 'react';
import {
  View,
  Text,
  Button,
  // StyleSheet,
  // TextInput,
  // TouchableHighlight,
} from 'react-native';
import EmailInput from '../Signup/EmailInput';
import PasswordInput from '../Signup/PasswordInput';

function Col() {
  return (
    <View className="col text-center">
      <Text>Welcome to Tee-Time!</Text>
      <View>
        <EmailInput />
        <PasswordInput />
        <Button
          title="Sign Up"
          type="submit"
          id="login-btn"
          className="btn btn-default"
        />
      </View>
      <View>
        <Text>
          Already have an account? Log in{' '}
          <Text style={{color: 'blue'}} onPress={() => Linking.openURL('/')}>
            Here
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default Col;
