import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>

          <Route exact path="/login" component={Login}></Route>

          <Route exact path="/dashboard" component={Dashboard}></Route>

          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
