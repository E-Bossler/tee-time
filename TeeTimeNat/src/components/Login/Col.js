import React from 'react';
import {
  View,
  Text,
  Button,
  Linking,
  // StyleSheet,
  // TextInput,
  //   TouchableHighlight,
} from 'react-native';
import EmailInput from '../Login/EmailInput';
import PasswordInput from '../Login/PasswordInput';

function Col() {
  return (
    <View className="col text-center">
      <Text>Welcome to Tee-Time!</Text>
      <View>
        <EmailInput />
        <PasswordInput />
        <Button
          title="Login"
          type="submit"
          id="login-btn"
          className="btn btn-default"
        />
      </View>
      <View>
        <Text>
          Don't have an account? Sign up{' '}
          <Text
            style={{color: 'blue'}}
            onPress={() => Linking.openURL('/signup')}>
            Here
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default Col;
