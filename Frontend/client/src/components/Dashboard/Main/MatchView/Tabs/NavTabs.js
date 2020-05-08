import React from "react";
import { Link } from "react-router-dom";
import "./stylesheet.css";

function NavTabs() {
    return(
        <ul id="tabs-list">
            <li className="nav-tab">
                <Link id="tracker-tab" to="/dashboard/matchView/tracker">Tracker</Link>
            </li>
            <li className="nav-tab">
                <Link id="scoreboard-tab" to="/dashboard/matchView/scoreboard">Score Board</Link>
            </li>
            <li className="nav-tab">
                <Link id="chat-tab" to="/dashboard/matchView/chat">Chat</Link>
            </li>
        </ul>
    );
};

export default NavTabs;