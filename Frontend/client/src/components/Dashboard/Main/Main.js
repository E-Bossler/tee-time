import React, { Component } from "react";
import { Route } from "react-router-dom";
import NewMatchBtn from "./MatchForm/NewMatchBtn";
import Greens from "../../GreensCSS/Greens"
import FormContainer from "./MatchForm/FormContainer";
import UserMenuContainer from "./UserData/UserMenuContainer";
import MatchView from "./MatchView/MatchView";
import "./stylesheet.css";

class Main extends Component {
    render() {
        return(
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
    };
};

export default Main;