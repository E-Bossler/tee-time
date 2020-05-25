import React, { Component } from "react";
import { Text, Input, Button } from "react-native-elements";
import api from "../../../utils/api";
import styles from "./stylesheet.scss";
import SweetAlert from "react-native-sweet-alert";

class LogInForm extends Component {
  state = {
    toDashboard: api,
    email: "",
    password: "",
    userData: {}
  };

  componentDidMount() {
    this.setState({ toDashboard: false });
  }

  handleChangeEmail(e) {
    this.setState({ email: e });
  }

  handleChangePass(e) {
    this.setState({ password: e });
  }

  handleSubmit() {
    const email = this.state.email;
    const password = this.state.password;
    api.login(email, password).then(result => {
      let successful = result.data.success;

      if (successful) {
        const userData = result.data.userData;
        this.setState({ userData });
        this.setState({ toDashboard: true });
      } else {
        SweetAlert.showAlertWithOptions({
          title: "ERROR",
          subTitle: "Your login information is incorrect.",
          style: "error"
        });
      }
    });
  }

  render() {
    if (this.state.toDashboard === true) {
      const userData = this.state.userData;
      this.props.navigation.navigate("Dashboard", {
        screen: "Home",
        params: { userData: userData }
      });
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
          type="email"
          className="form-control"
          id="email-input"
          name="email"
          placeholder="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
        />
        <Input
          onChangeText={value => this.handleChangePass(value)}
          style={styles.input}
          type="password"
          className="form-control"
          id="password-input"
          name="password"
          placeholder="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
        />

        <Button
          title="Login"
          style={styles.button}
          id="login-btn"
          className="btn btn-default"
          onPress={this.handleSubmit.bind(this)}
        />

        <Button
          title="Or Sign Up"
          onPress={() => {
            this.props.navigation.navigate("Signup");
          }}
        />

        <Text>© 2020 Ballard Study Group</Text>
      </>
    );
  }
}

export default LogInForm;
