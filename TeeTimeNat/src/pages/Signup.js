import React, {Component} from 'react';
import {Divider, Text} from 'react-native-elements';
import SignUpForm from '../components/Signup/SignUpForm';
import Greens from '../components/GreensCSS/Greens';

class Signup extends Component {
  render() {
    return (
      <Divider>
        <SignUpForm />
        <Greens />
        <Divider id="landing-container">
          <Text h4>© 2020 Ballard Study Group</Text>
        </Divider>
      </Divider>
    );
  }
}

export default Signup;
