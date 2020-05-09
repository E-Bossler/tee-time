import React from "react";
import { Route } from "react-router-dom";
import Stats from "./Stats/Stats";
import Courses from "./Courses/Courses";
import Friends from "./Friends/Friends";
import Matches from "./Matches/Matches";

function UserMenu() {
    return(
        <div>
            <Route path="/dashboard/userMenu/stats">
                <Stats />
            </Route>

            <Route path="/dashboard/userMenu/courses">
                <Courses />
            </Route>

            <Route path="/dashboard/userMenu/friends">
                <Friends />
            </Route>

            <Route path="/dashboard/userMenu/matches">
                <Matches />
            </Route>
        </div>
    );
};

export default UserMenu;