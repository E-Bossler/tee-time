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
      </View>
      <View>
        <Text>If you're a member, log in!</Text>
        <Link to="/">
          <Button title="Log In" />
        </Link>
      </View>
    </View>
  );
}

export default Col;
