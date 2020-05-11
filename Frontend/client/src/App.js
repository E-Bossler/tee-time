import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

// THE FOLLOWING 8 LINES OF CODE ARE A TEST TO SEE IF THE FRONT END IS GETTING INFORTATION FROM THE SERVER

import test from "./test.js";

function testFun() {
  test.getAll().then(result => {
    console.log(result.data[0]);
  });
}

class App extends Component {
  

  constructor(props) {
    super(props);

   
  }

  render() {
    testFun();
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>

          <Route exact path="/dashboard" component={Dashboard}></Route>

          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
