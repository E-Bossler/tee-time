import React, { Component } from "react";
import Greens from "../components/GreensCSS/Greens";
import SignUpForm from "../components/Signup/SignUpForm";

class Signup extends Component {
  render() {
    return (
      <div>
        <SignUpForm />
        <Greens />
        <div id="landing-container">
          <h4>© 2020 Ballard Study Group</h4>
        </div>
      </div>
    );
  }
}

export default Signup;
