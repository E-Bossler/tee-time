import React from "react";
import Form from "../components/Login/Form"
import Greens from "../components/GreensCSS/Greens"

// import {
//   getFromStorage,
//   setInStorage
// } from "../../src/components/utils/storage"

function Login() {
  
  // const {
  //   isLoading,
  //   token
  // } = this.state;

  // if (!token) {
  //   return (
  //     <div>
  //       <Form />
  //       <Greens />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Form />
      <Greens />
    </div>
  );
}

export default Login;