import React, { Component } from "react";
import HoleInput from "./HoleInput";
import ParInput from "./ParInput";
import HcpInput from "./HcpInput";
import ScoreInput from "./ScoreInput";
import "./stylesheet.css";

class ScoreForm extends Component {
    render() {
        return(
            <div className="score-form">
                <HoleInput />
                <ParInput />
                <HcpInput />
                <ScoreInput /> 
            </div>
        )
    }
};

export default ScoreForm;