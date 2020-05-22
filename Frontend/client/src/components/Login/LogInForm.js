import React, { Component } from "react";
import api from "../utils/api";
import "./stylesheet.css";
import { Redirect } from "react-router-dom";
import { setInStorage } from "../utils/storage";
import swal from "sweetalert";

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDashboard: api,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    api.login(email, password).then(result => {
      let successful = result.data.success;

      if (successful) {
        setInStorage(result.data.token, result);
        this.setState({ toDashboard: true });
      } else {
        swal("ERROR", "Your login information is incorrect.", "error");
      }
    });
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>Welcome to Tee-Time!</h1>
            <form>
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
                onClick={e => this.handleSubmit(e)}
              >
                Login
              </button>
            </form>
            <div>
              <p>
                Don't have an account? Sign up <a href="/signup">here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogInForm;
