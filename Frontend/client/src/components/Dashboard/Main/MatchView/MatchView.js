import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import TabsContainer from "./Tabs/TabsContainer"
import DashboardContainer from "./Dashboard/DashboardContainer";
import "./stylesheet.css";

function MatchView() {
    return(
        <div>
            <TabsContainer />
            <Router>
                <Switch>
                    <DashboardContainer />
                </Switch>
            </Router>
        </div>
    );
};

export default MatchView;