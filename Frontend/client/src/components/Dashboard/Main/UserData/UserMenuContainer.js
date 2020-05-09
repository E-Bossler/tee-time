import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import UserMenu from "./UserMenu";

function UserMenuContainer() {
    return(
        <div>
            <Router>
                <Switch>
                    <UserMenu />
                </Switch>
            </Router>
        </div>
    );
};

export default UserMenuContainer;