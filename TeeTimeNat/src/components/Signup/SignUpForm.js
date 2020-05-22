import React, {Component} from 'react';
import {Divider, Text, Input, Button} from 'react-native-elements';
import api from '../utils/api';
import style from './stylesheet.scss';
import {Redirect, Link} from 'react-router-native';
import SweetAlert from 'react-native-sweet-alert';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLogin: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    const username = document.getElementById('username-input').value;

    api.signUp(email, password, username).then(result => {
      let successful = result.data.success;
      if (successful) {
        SweetAlert.showAlertWithOptions({
          title: 'SUCCESS',
          subTitle:
            'You have created an account. Please log in to your account.',
          style: 'success',
        });
        this.setState({toLogin: true});
      } else {
        SweetAlert.showAlertWithOptions({
          title: 'ERROR',
          subTitle: 'This account already exists.',
          style: 'error',
        });
      }
    });
  }

  render() {
    if (this.state.toLogin === true) {
      return <Redirect to="/login" />;
    }
    return (
      <Divider style={style} className="container">
        <Divider className="row">
          <Divider className="col text-center">
            <Text h1>Welcome to Tee-Time!</Text>
            <Divider>
              <Divider className="form-group">
                <Input
                  label="Username"
                  type="text"
                  className="form-control"
                  id="username-input"
                  name="username"
                  placeholder="Username"
                />
              </Divider>
              <Divider className="form-group">
                <Input
                  label="Email Address"
                  type="email"
                  className="form-control"
                  id="email-input"
                  name="email"
                  placeholder="Email"
                />
              </Divider>
              <Divider className="form-group">
                <Input
                  label="Password"
                  type="password"
                  className="form-control"
                  id="password-input"
                  name="password"
                  placeholder="Password"
                />
              </Divider>
              <Button
                type="submit"
                id="login-btn"
                className="btn btn-default"
                onPress={e => this.handleSubmit(e)}>
                Sign Up
              </Button>
            </Divider>
            <Divider>
              <Text>
                Already have an account? Log in <Link to="/">here</Link>
              </Text>
            </Divider>
          </Divider>
        </Divider>
      </Divider>
    );
  }
}

export default SignUpForm;
