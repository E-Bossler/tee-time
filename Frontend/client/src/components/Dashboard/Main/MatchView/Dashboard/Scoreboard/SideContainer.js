import React, { Component } from "react";
import "./stylesheet.css";

class Scoreboard extends Component {
    render() {
        return(
            <div className="side-container">
                <p className="out-side">OUT</p>
                <p className="in-side">IN</p>
            </div>
        )
    }
};

export default Scoreboard;
