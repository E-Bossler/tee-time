import React from "react";
import Tracker from "./Tracker";
import Chat from "./Chat";
import ScoreBoard from "./ScoreBoard";

function TabsContainer() {
    return(
        <div>
            <Tracker />
            <Chat />
            <ScoreBoard />
        </div>
    );
};

export default TabsContainer;