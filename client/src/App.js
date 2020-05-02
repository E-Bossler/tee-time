import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function testFun() {
  test.getAll().then(
    result => {
      console.log(result)
    }
  )

function App() {
  return (
    <Router>
    <Switch>
      <Route
        exact path="/"
        // component={PAGE TBD}
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
