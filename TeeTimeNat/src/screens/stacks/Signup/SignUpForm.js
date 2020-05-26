import React, { Component } from "react";
import { Text, Input, Button } from "react-native-elements";
import api from "../../../utils/api";
import { TouchableOpacity } from "react-native";
import SweetAlert from "react-native-sweet-alert";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLogin: false,
      email: "",
      pass: "",
      username: ""
    };
    this.handleSubmit.bind(this);
    this.handleChangeEmail.bind(this);
    this.handleChangePass.bind(this);
    this.handleChangeUsername.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e });
  }
  handleChangeUsername(e) {
    this.setState({ username: e });
  }
  handleChangePass(e) {
    this.setState({ pass: e });
  }

  handleSubmit() {
    const email = this.state.email;
    const password = this.state.pass;
    const username = this.state.username;

    api.signUp(email, password, username).then(result => {
      let successful = result.data.success;
      if (successful) {
        SweetAlert.showAlertWithOptions({
          title: "SUCCESS",
          subTitle:
            "You have created an account. Please log in to your account.",
          style: "success"
        });
        this.setState({ toLogin: true });
      } else {
        SweetAlert.showAlertWithOptions({
          title: "ERROR",
          subTitle: "This account already exists.",
          style: "error"
        });
      }
    });
  }

  render() {
    if (this.state.toLogin === true) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <Text h1>Welcome to Tee-Time!</Text>

        <Input
          type="text"
          className="form-control"
          id="username-input"
          name="username"
          placeholder="Username"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={value => this.handleChangeUsername(value)}
        />
        <Input
          type="email"
          className="form-control"
          id="email-input"
          name="email"
          placeholder="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={value => this.handleChangeEmail(value)}
        />
        <Input
          type="password"
          className="form-control"
          id="password-input"
          name="password"
          placeholder="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={value => this.handleChangePass(value)}
        />

        <Button
          title="Sign Up"
          type="submit"
          id="login-btn"
          className="btn btn-default"
          onPress={this.handleSubmit}
        />

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("TeeTime");
          }}
        >
          <Text>Back to Login</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default SignUpForm;
