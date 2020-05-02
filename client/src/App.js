import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";

// THE FOLLOWING 8 LINES OF CODE ARE A TEST TO SEE IF THE FRONT END IS GETTING INFORTATION FROM THE SERVER

import test from './test.js'

function testFun() {
  test.getAll().then(
    result => {
      console.log(result.data[0])
    }
  )
}

function App() {
  testFun();
  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
        // component={PAGE TBD}
        component={Signup}
        // landing page: signup and login components
        >
    
        </Route>
        <Route
          exact path="/saved"
        // component={PAGE TBD}
        // dashboard: 
        >
        </Route>
        <Route
          exact path="/saved"
        // component={PAGE TBD}
        >
        </Route>
        <Route
          exact path="/saved"
        // component={PAGE TBD}
        >
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
