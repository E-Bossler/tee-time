import React, {Component} from "react";
import Links from "./Links";
import "./stylesheet.css";

class Slider extends Component {
    render() {
        return(
            <div id='slider'>
                <Links animate={this.props.action} burgerClicked={this.props.clicked}/>
            </div>
        );
    }
};

export default Slider;