import React, { Component } from "react";
import { Route } from "react-router-dom";
import NewMatchBtn from "./MatchForm/NewMatchBtn";
import Greens from "../../GreensCSS/Greens";
import FormContainer from "./MatchForm/FormContainer";
import UserMenuContainer from "./UserData/UserMenuContainer";
import MatchView from "./MatchView/MatchView";
import "./stylesheet.css";

// import {
//   getFromStorage,
//   setInStorage
// } from "../../utils/storage"

class Main extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isLoading: true,
  //     token: '',
  //     signUpError: '',
  //     signInError: ''
  //   };
  // }

  // componentDidMount() {
  //   const token = getFromStorage('tee-time-seattle')

  //   if (token) {
  //     //verify if the user is logged in 

  //     fetch(`/api/account/verify?token=${token}`)
  //       .then(res => res.json())
  //       .then(json => {
  //         if (json.success) {
  //           this.setState({
  //             token: token,
  //             isLoading: false
  //           })
  //         } else {
  //           this.setState({
  //             isLoading: false
  //           })
  //         }
  //       })

  //   } else {
  //     this.setState({
  //       isLoading: false
  //     }
  //     )
  //   }
  // }

  render() {

    // const {
    //   isLoading,
    //   token
    // } = this.state;

    // if (isLoading) {
    //   return (
    //     <div>
    //       <p>
    //         Loading...
    //       </p>
    //     </div>
    //   )
    // }

    // if (!token) {
    //   return (
    //     <div>
    //       <p>
    //         Sign In
    //       </p>
    //       <p>
    //         Sign Up
    //       </p>
    //     </div>
    //   )
    // }

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
