import React, { Component } from "react";
import "./stylesheet.css";

class Switch extends Component {
    render() {
        return(
            <div className="switch-container">
                <label className="switch">
                <input id="dark-mode" type="checkbox" />
                <span className="slider"></span>
                </label>
            </div>
        );
    } 
};

export default Switch;