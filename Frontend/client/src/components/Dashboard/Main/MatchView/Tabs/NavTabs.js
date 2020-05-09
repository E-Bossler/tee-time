import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./stylesheet.css";

class NavTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trackTab: false,
            scoreTab: false,
            chatTab: false
        };
    };

    trackTab() {
        this.state.trackTab = true;
        this.state.scoreTab = false;
        this.state.chatTab = false;
    };
    scoreTab() {
        this.state.scoreTab = true;
        this.state.chatTab = false;
        this.state.trackTab = false;
    }
    chatTab() {
        this.state.chatTab = true;
        this.state.trackTab = false;
        this.state.scoreTab = false;
    }

    render() {
        return(
            <ul id="tabs-list">
                <li 
                    onClick={this.trackTab.bind(this)} 
                    className={this.state.trackTab ? "nav-tab selected" : "nav-tab"}
                >
                    <Link id="tracker-tab" to="/dashboard/matchView/tracker">
                        Tracker
                    </Link>
                </li>
                <li 
                    onClick={this.scoreTab.bind(this)} 
                    className={this.state.scoreTab ? "nav-tab selected" : "nav-tab"}
                >
                    <Link id="scoreboard-tab" to="/dashboard/matchView/scoreboard">
                        Score Board
                    </Link>
                </li>
                <li 
                    onClick={this.chatTab.bind(this)} 
                    className={this.state.chatTab ? "nav-tab selected" : "nav-tab"}
                >
                    <Link id="chat-tab" to="/dashboard/matchView/chat">
                        Chat
                    </Link>
                </li>
            </ul>
        );
    };
};

export default NavTabs;