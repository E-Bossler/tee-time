import React, {Component} from 'react';
import {Divider, Text, Input, Button} from 'react-native-elements';
import api from '../utils/api';
import './stylesheet.scss';
import {Redirect, Link} from 'react-router-native';
import {setInStorage} from '../utils/storage';
import SweetAlert from 'react-native-sweet-alert';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDashboard: api,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
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
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Divider className="container">
        <Divider className="row">
          <Divider className="col text-center">
            <Text h1>Welcome to Tee-Time!</Text>
            <Divider>
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
                Login
              </Button>
            </Divider>
            <Divider>
              <Text>
                Don't have an account? Sign up <Link to="/signup">here</Link>
              </Text>
            </Divider>
          </Divider>
        </Divider>
      </Divider>
    );
  }
}

export default LogInForm;
