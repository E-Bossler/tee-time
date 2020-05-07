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
        <Text>Not a member? Sign Up!</Text>
        <Link to="/signup">
          <Button title="Sign Up" />
        </Link>
      </View>
    </View>
  );
}

export default Col;
