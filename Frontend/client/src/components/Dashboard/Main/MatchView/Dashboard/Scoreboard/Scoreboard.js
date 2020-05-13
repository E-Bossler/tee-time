import React, { Component } from "react";
import Scorecard from "./Scorecard";
import "./stylesheet.css";

class Scoreboard extends Component {
    render() {
        return(
            <div id="scoreboard">
                <Scorecard />
            </div>
        )
    }
};

export default Scoreboard;
