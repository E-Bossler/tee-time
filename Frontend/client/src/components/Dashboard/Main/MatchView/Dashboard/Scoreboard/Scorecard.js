import React, { Component } from "react";
import IconContainer from "./IconContainer";
import ScoreForm from "./ScoreForm";
import "./stylesheet.css";

class Scorecard extends Component {
    render() {
        return(
            <div className="scorecard">
                <IconContainer />
                <p className="player-name">Player1</p>
                <ScoreForm />
            </div>
        )
    }
};

export default Scorecard;