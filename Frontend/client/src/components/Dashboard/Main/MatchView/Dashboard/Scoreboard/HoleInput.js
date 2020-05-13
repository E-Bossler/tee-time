import React, { Component } from "react";
import "./stylesheet.css";

class HoleInput extends Component {
    render() {
        return(
            <div className="col">
                <label className="current-hole-label">Hole</label>
                <input className="current-hole-input" placeholder="1" />
            </div>
        )
    }
};

export default HoleInput;              