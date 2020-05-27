import React, { Component } from "react";
import { View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import api from "../../../utils/api";
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
        <Text
          style={{
            textAlign: "center",
            backgroundColor: "rgb(100, 200, 100)",
            color: "white",
            marginBottom: 25
          }}
          h1
        >
          Welcome to Tee-Time!
        </Text>

        <Input
          onChangeText={value => {
            this.handleChangeEmail(value);
          }}
          style={{ marginBottom: 20 }}
          type="email"
          className="form-control"
          id="email-input"
          name="email"
          placeholder="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
        />
        <Input
          onChangeText={value => this.handleChangePass(value)}
          style={{ marginBottom: 50 }}
          type="password"
          className="form-control"
          id="password-input"
          name="password"
          placeholder="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
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
            title="Login"
            titleStyle={{ fontSize: 20 }}
            buttonStyle={{
              backgroundColor: "rgb(100, 200, 100)",
              color: "white",
              paddingVertical: 10
            }}
            id="login-btn"
            className="btn btn-default"
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
            title="Or Sign Up"
            titleStyle={{ fontSize: 20 }}
            buttonStyle={{
              backgroundColor: "rgb(100, 200, 100)",
              color: "white",
              paddingVertical: 10
            }}
            onPress={() => {
              this.props.navigation.navigate("Signup");
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

export default LogInForm;
