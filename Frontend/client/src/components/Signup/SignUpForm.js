import React, { Component } from "react";
import api from "../utils/api";
import "./stylesheet.css";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLogin: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const passwordCheck = document.getElementById("password-input-check").value;
    const usernameValue = document.getElementById("username-input").value;
    const username = usernameValue.toLowerCase();

    if (username === "") {
      swal("ERROR", 
      "Please input a username.",
      "warning")
      return
    }
    
    if (email === "") {
      swal("ERROR", 
      "Please input an email address.", 
      "warning")
      return
    }

    if (password === "") {
      swal("ERROR", 
      "Please input a password.", 
      "warning")
      return
    }

    if (password === passwordCheck) {
      api.signUp(email, password, username).then(result => {
        let successful = result.data.success;
        if (successful) {
          swal(
            "SUCCESS",
            "You have created an account. Please log in.",
            "success");
          this.setState({ toLogin: true });
        } else {
          swal("ERROR", 
          "This email address already has an account associated with it.", 
          "error");
        }
      });
    } else {
      swal("PASSWORD ISSUE", 
      "Both passwords must match.", 
      "warning")
    }


  }

  render() {
    if (this.state.toLogin === true) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>Welcome to Tee-Time!</h1>
            <form>
              <div className="form-group">
                <label htmlFor="email-input">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username-input"
                  name="username"
                  placeholder="Username"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="email-input">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-input"
                  name="email"
                  placeholder="Email"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="password-input">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password-input"
                  name="password"
                  placeholder="Password"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="password-input-check">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password-input-check"
                  name="password-check"
                  placeholder="Confirm Password"
                ></input>
              </div>
              <button
                type="submit"
                id="login-btn"
                className="btn btn-default"
                onClick={e => this.handleSubmit(e)}
              >
                Sign Up
              </button>
            </form>
            <div>
              <p>
                Already have an account? Log in <a href="/">here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
