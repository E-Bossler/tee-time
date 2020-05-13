import React, { Component } from "react";
import "./stylesheet.css";

class IconContainer extends Component {
    render() {
        return(
            <div className="icon-container">
                <div className="row">
                    <div className="icon">1</div>
                    <div className="icon">2</div>
                    <div className="icon">3</div>
                    <div className="icon">4</div>
                    <div className="icon">5</div>
                    <div className="icon">6</div>
                    <div className="icon">7</div>
                    <div className="icon">8</div>
                    <div className="icon">9</div>
                </div>
                <div className="row">
                    <div className="icon">1</div>
                    <div className="icon">2</div>
                    <div className="icon">3</div>
                    <div className="icon">4</div>
                    <div className="icon">5</div>
                    <div className="icon">6</div>
                    <div className="icon">7</div>
                    <div className="icon">8</div>
                    <div className="icon">9</div>
                </div>
            </div>
        )
    }
};

export default IconContainer;