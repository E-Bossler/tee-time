import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
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
      userData: {},
      toLogin: false,
    };
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
                const user = response.data[i].username;
                this.setState({
                  username: user,
                });
                const username = this.state.username;
                axios
                  .put("/api/dashboard/userMenu/friends", { username })
                  .then(res => {
                    const userData = {
                      username: res.data[0].username,
                      email: res.data[0].email,
                      id: res.data[0]._id,
                      currentMatchId: "",
                    };

                    if (res.data[0].currentMatch === undefined) {
                      console.log("no current match");
                    } else {
                      userData.currentMatchId =
                        res.data[0].currentMatch.courseId;
                    }

                    this.setState({ userData });
                    console.log(this.state.userData);
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
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Route exact path="/dashboard">
          <div id="landing-container">
            <h2>Welcome, {this.state.username}</h2>
            <h4>Start a new match?</h4>
            <NewMatchBtn />
            <Greens />
            {/* <h4>© 2020 Ballard Study Group</h4> */}
          </div>
        </Route>

        <Route path="/dashboard/matchForm">
          <FormContainer
            userData={this.state.userData}
            username={this.state.username}
          />
        </Route>

        <Route path="/dashboard/userMenu">
          <UserMenuContainer
            userData={this.state.userData}
            username={this.state.username}
          />
        </Route>

        <Route path="/dashboard/matchView">
          <MatchView
            userData={this.state.userData}
            username={this.state.username}
          />
        </Route>
      </div>
    );
  }
}

export default Main;
