import React, { Component } from "react";
import { Route } from "react-router-dom";
import NewMatchBtn from "./MatchForm/NewMatchBtn";
import Greens from "../../GreensCSS/Greens";
import FormContainer from "./MatchForm/FormContainer";
import UserMenuContainer from "./UserData/UserMenuContainer";
import MatchView from "./MatchView/MatchView";
import "./stylesheet.css";
import api from '../../utils/api';
import {
  getFromStorage,
  setInStorage
} from "../../utils/storage"



class Main extends Component {

  constructor(props) {
    super(props);
  };

  findUserName () {
    // get token from storage
    let key = 'SessionToken'
    const sessionToken = getFromStorage(key)
    // console.log(sessionToken);
    
    // search user session db

    api.verify(sessionToken)
      // .then(
      //   result => {
      //     console.log('here are the results:', result.data)
      //   }
      // )

    // get user id from session db
    // search users db for id 
    // return username from the user 
  }

  render() {
    this.findUserName();
    return (
      <div>
        <Route exact path="/dashboard">
          <div id="landing-container">
            <h2>Welcome, username</h2>
            <h4>Start a new match?</h4>
            <NewMatchBtn />
            <Greens />
          </div>
        </Route>

        <Route path="/dashboard/matchForm">
          <FormContainer />
        </Route>

        <Route path="/dashboard/userMenu">
          <UserMenuContainer />
        </Route>

        <Route path="/dashboard/matchView">
          <MatchView />
        </Route>
      </div>
    );
  }
}

export default Main;
