import React from "react";
import TabsContainer from "./Tabs/TabsContainer"
import DashboardContainer from "./Dashboard/DashboardContainer";
import "./stylesheet.css";

function MatchView() {
    return(
        <div>
            <TabsContainer />
            <DashboardContainer />
        </div>
    );
};

export default MatchView;