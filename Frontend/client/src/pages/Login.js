import React, { Component } from "react";
import LogInForm from "../components/Login/LogInForm";
import Greens from "../components/GreensCSS/Greens";

// import {
//   getFromStorage,
//   setInStorage
// } from "../../src/components/utils/storage"

class Login extends Component {
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
