import React, { Component } from "react";
import api from "../utils/api";
import "./stylesheet.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  navigateToSignIn() {
    this.props.history.push("/signin");
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const username = document.getElementById("username-input").value;

    api.signUp(email, password, username).then(result => {
      console.log(result.data.success, result.data.message);
      let successful = result.data.success;
      if (successful) {
        window.location.href = "/";
      } else {
        alert("Error: this account already exists.");
      }
    });
  }

  render() {
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
              <button
                type="submit"
                id="login-btn"
                className="btn btn-default"
                onClick={e => {
                  this.handleSubmit(e, this.props);
                }}
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
