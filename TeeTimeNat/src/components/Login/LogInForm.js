import React, {Component} from 'react';
import {Divider, Text, Input, Button} from 'react-native-elements';
import api from '../utils/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './stylesheet.scss';
import {Redirect, Link} from 'react-router-native';
import {setInStorage} from '../utils/storage';
import SweetAlert from 'react-native-sweet-alert';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDashboard: api,
      email: '',
      password: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
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
    console.log(styles);
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Divider style={styles.container} className="container">
        <Divider className="row">
          <Divider style={stylse.col} className="col text-center">
            <Text style={styles.h1} h1>
              Welcome to Tee-Time!
            </Text>
            <Divider style={styles.form}>
              <Divider style={styles.formGroup} className="form-group">
                <Input
                  onChangeText={value => this.setState({email: value})}
                  style={styles.input}
                  label="Email Address"
                  type="email"
                  className="form-control"
                  id="email-input"
                  name="email"
                  placeholder="Email"
                  leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
                />
              </Divider>
              <Divider style={styles.formGroup} className="form-group">
                <Input
                  onChangeText={value => this.setState({password: value})}
                  style={styles.input}
                  label="Password"
                  type="password"
                  className="form-control"
                  id="password-input"
                  name="password"
                  placeholder="Password"
                />
              </Divider>
              <Button
                title="Login"
                style={styles.button}
                id="login-btn"
                className="btn btn-default"
                onPress={e => this.handleSubmit(e)}
              />
            </Divider>
            <Divider>
              <Link to="/signup">
                <Text style={styles.p}>Sign up here</Text>
              </Link>
            </Divider>
          </Divider>
        </Divider>
      </Divider>
    );
  }
}

export default LogInForm;
