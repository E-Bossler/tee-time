import React, { Component } from "react";
import "./stylesheet.css";

class ScoreInput extends Component {
    render() {
        return(
            <div className="col">
                <label className="current-strokes-label">Score</label>
                <input className="current-strokes-input" />
            </div>
        )
    }
};

export default ScoreInput;