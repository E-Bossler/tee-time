import React from 'react';
import {View, Text, Button} from 'react-native';
import {Link} from 'react-router-native';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

function Col() {
  return (
    <View className="col text-center">
      <Text>Welcome to Tee-Time!</Text>
      <View>
        <EmailInput />
        <PasswordInput />
        <Link to="/dashboard">
          <Text>Log In</Text>
        </Link>
      </View>
      <View>
        <Text>Not a member? Click below to sign up</Text>
        <Link to="/signup">
          <Text>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
}

export default Col;
