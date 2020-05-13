import React, { Component } from "react";
import "./stylesheet.css";

class HcpInput extends Component {
    render() {
        return(
            <div className="col">
                <label className="current-handicap-label">Hcp</label>
                <input className="current-handicap-input" placeholder="16" />
            </div>
        )
    }
};

export default HcpInput;