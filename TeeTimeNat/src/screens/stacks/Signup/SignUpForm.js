import React, { Component } from "react";
import { Text, Input, Button } from "react-native-elements";
import api from "../../../utils/api";
import { View } from "react-native";
import SweetAlert from "react-native-sweet-alert";

class SignUpForm extends Component {
  state = {
    toLogin: false,
    email: "",
    pass: "",
    username: ""
  };

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
      this.props.navigation.navigate("TeeTime");
    }
    return (
      <>
        <Text
          h2
          style={{
            textAlign: "center",
            backgroundColor: "rgb(100, 200, 100)",
            color: "white",
            paddingVertical: 30,
            marginBottom: 30
          }}
        >
          Sign Up for Tee-Time
        </Text>

        <Input
          type="text"
          className="form-control"
          id="username-input"
          name="username"
          placeholder="Username"
          style={{ marginBottom: 20 }}
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={this.handleChangeUsername.bind(this)}
        />
        <Input
          type="email"
          className="form-control"
          id="email-input"
          name="email"
          placeholder="Email"
          style={{ marginBottom: 20 }}
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={this.handleChangeEmail.bind(this)}
        />
        <Input
          type="password"
          className="form-control"
          id="password-input"
          name="password"
          placeholder="Password"
          style={{ marginBottom: 20 }}
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={this.handleChangePass.bind(this)}
        />

        <View
          style={{
            width: "75%",
            alignSelf: "center",
            marginTop: 15,
            marginBottom: 25
          }}
        >
          <Button
            title="Sign Up"
            id="login-btn"
            className="btn btn-default"
            titleStyle={{ fontSize: 20 }}
            buttonStyle={{
              backgroundColor: "rgb(100, 200, 100)",
              color: "white",
              paddingVertical: 10
            }}
            onPress={this.handleSubmit.bind(this)}
          />
        </View>

        <View
          style={{
            width: "75%",
            alignSelf: "center",

            marginBottom: 25
          }}
        >
          <Button
            title="Back to Login"
            titleStyle={{ fontSize: 20 }}
            buttonStyle={{
              backgroundColor: "rgb(100, 200, 100)",
              color: "white",
              paddingVertical: 10
            }}
            onPress={() => {
              this.props.navigation.navigate("TeeTime");
            }}
          />
        </View>
        <Text style={{ justifyContent: "flex-end", alignSelf: "center" }}>
          © 2020 Ballard Study Group
        </Text>
      </>
    );
  }
}

export default SignUpForm;
