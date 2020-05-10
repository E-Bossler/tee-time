import React, { Component } from "react";
import Form from "../components/Signup/Form"
import Greens from "../components/GreensCSS/Greens"
import SignUpForm from "../components/Signup/SignUpForm";

// import {
//   getFromStorage,
//   setInStorage
// } from "../../src/components/utils/storage"


class Signup extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      {/* <Form /> */}
      <SignUpForm />
      <Greens />
    </div>
  );
  }
}

export default Signup;