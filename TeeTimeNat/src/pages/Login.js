import React, {Component} from 'react';
import {Divider, Text} from 'react-native-elements';
import LogInForm from '../components/Login/LogInForm';
import Greens from '../components/GreensCSS/Greens';

class Login extends Component {
  render() {
    return (
      <Divider>
        <LogInForm />
        <Greens />
        <Divider id="landing-container">
          <Text h4>© 2020 Ballard Study Group</Text>
        </Divider>
      </Divider>
    );
  }
}

export default Login;
