import React, { Component } from "react";
import "./stylesheet.css";

class ParInput extends Component {
    render() {
        return(
            <div className="col">
                <label className="current-par-label">Par</label>
                <input className="current-par-input" placeholder="3" />
            </div>
        )
    }
};

export default ParInput;