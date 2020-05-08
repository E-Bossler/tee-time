import React, { Component } from "react";
import { Route } from "react-router-dom";
import NewMatchBtn from "./MatchForm/NewMatchBtn";
import FormContainer from "./MatchForm/FormContainer";
import MatchView from "./MatchView/MatchView";

class Main extends Component {
    render() {
        return(
            <div>
                <Route exact path="/dashboard">
                    <NewMatchBtn />
                </Route>

                <Route path="/dashboard/matchForm">
                    <FormContainer />
                </Route>

                <Route path="/dashboard/matchView">
                    <MatchView />
                </Route>
            </div>
        );
    };
};

export default Main;