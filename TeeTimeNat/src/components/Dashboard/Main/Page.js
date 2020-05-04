import React from 'react';
import {
  View,
  // Text,
  // StyleSheet,
  // TextInput,
  // TouchableHighlight,
} from 'react-native';
import FormContainer from './MatchForm/FormContainer';
import StartBtn from './StartBtn/StartBtn';

function Page() {
  return (
    <View>
      <StartBtn />
      <FormContainer />
    </View>
  );
}

export default Page;
