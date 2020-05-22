import React, {Component} from 'react';
// import {TouchableOpacity as Button} from 'react-native';
import {Divider, Text, Input, Button} from 'react-native-elements';
import api from '../utils/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './stylesheet.scss';
import {NativeRouter, Redirect, Link} from 'react-router-native';
import {setInStorage} from '../utils/storage';
import SweetAlert from 'react-native-sweet-alert';
import Greens from '../GreensCSS/Greens';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDashboard: api,
      email: '',
      password: '',
    };
    this.handleSubmit.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({email: e});
    console.log(this.state.email);
  }

  handleChangePass(e) {
    this.setState({password: e});
    console.log(this.state.password);
  }

  handleSubmit() {
    console.log(this.state);
    const email = this.state.email;
    const password = this.state.password;
    api.login(email, password).then(result => {
      let successful = result.data.success;

      if (successful) {
        setInStorage(result.data.token, result);
        this.setState({toDashboard: true});
      } else {
        SweetAlert.showAlertWithOptions({
          title: 'ERROR',
          subTitle: 'Your login information is incorrect.',
          style: 'error',
        });
      }
    });
  }

  render() {
    console.log(this.props);
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <>
        <Text style={styles.h1} h1>
          Welcome to Tee-Time!
        </Text>

        <Input
          onChangeText={value => {
            this.handleChangeEmail(value);
          }}
          style={styles.input}
          label="Email Address"
          type="email"
          className="form-control"
          id="email-input"
          name="email"
          placeholder="Email"
          leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
        />
        <Input
          onChangeText={value => this.handleChangePass(value)}
          style={styles.input}
          label="Password"
          type="password"
          className="form-control"
          id="password-input"
          name="password"
          placeholder="Password"
        />

        <Button
          title="Login"
          style={styles.button}
          id="login-btn"
          className="btn btn-default"
          onPress={this.handleSubmit}
        />

        <Button
          title="Or Sign Up"
          onPress={() => {
            this.props.navigation.navigate('Signup');
          }}
        />
        <Greens />

        <Text>© 2020 Ballard Study Group</Text>
      </>
    );
  }
}

export default LogInForm;
