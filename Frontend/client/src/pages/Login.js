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