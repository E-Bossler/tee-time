import React, { Component } from "react";
import LogInForm from "../components/Login/LogInForm"
import Form from "../components/Login/Form"
import Greens from "../components/GreensCSS/Greens"

// import {
//   getFromStorage,
//   setInStorage
// } from "../../src/components/utils/storage"

class Login extends Component {

  constructor(props) {
    super(props);

  //   this.state = {
  //     isLoading: true,
  //     token: '',
  //     signUpError: '',
  //     signInError: '',
  //     signInEmail: '',
  //     signInPassword: '',
  //     signUpEmail: '',
  //     signUpPassword: '',
  //   };

  //   this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
  //   this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
  //   this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
  //   this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    
  //   this.onSignIn = this.onSignIn.bind(this);
  //   this.onSignUp = this.onSignUp.bind(this);
  //   this.logout = this.logout.bind(this);
  }

  render() {
    return (
      <div>
        {/* <Form /> */}
        <LogInForm />
        <Greens />
        <div id="landing-container">
            <h4>© 2020 Ballard Study Group</h4>
          </div>
      </div>
    );
  }
}

export default Login;