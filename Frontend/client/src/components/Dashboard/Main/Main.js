import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NewMatchBtn from "./MatchForm/NewMatchBtn";
import Greens from "../../GreensCSS/Greens";
import FormContainer from "./MatchForm/FormContainer";
import UserMenuContainer from "./UserData/UserMenuContainer";
import MatchView from "./MatchView/MatchView";
import "./stylesheet.css";
import api from "../../utils/api";
import { getFromStorage } from "../../utils/storage";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",

      toLogin: false
    }

    

  }

  componentDidMount() {
    this.findUserName();
  }

  findUserName() {
    // get token from storage
    let key = "SessionToken";
    const sessionToken = getFromStorage(key);
    // search user session db

    api.verify(sessionToken).then(response => {
      for (let i = 0; i < response.data.length; i++) {
        let checkAgainstId = response.data[i]._id;
        if (
          sessionToken === checkAgainstId &&
          response.data[i].isDeleted === false
        ) {
          const userId = response.data[i].userId;
          api.getUserWithId(userId).then(response => {
            for (let i = 0; i < response.data.length; i++) {
              let checkAgainstId = response.data[i]._id;
              if (
                userId === checkAgainstId &&
                response.data[i].isDeleted === false
              ) {
                const username = response.data[i].username;
                this.setState({
                  username,
                });
              }
            }
          });
        }
      }
    });
  }

  render() {

    if (this.state.toLogin === true) {
      return <Redirect to='/' />
    }
    

    return (
      <div>
        <Route exact path="/dashboard">
          <div id="landing-container">
            <h2>Welcome, {this.state.username}</h2>
            <h4>Start a new match?</h4>
            <NewMatchBtn />
            <Greens />
            <h4>© 2020 Ballard Study Group</h4>
          </div>
        </Route>

        <Route path="/dashboard/matchForm">
          <FormContainer />
        </Route>

        <Route path="/dashboard/userMenu">
          <UserMenuContainer username={this.state.username} />
        </Route>

        <Route path="/dashboard/matchView">
          <MatchView />
        </Route>
      </div>
    );
  }
}

export default Main;
