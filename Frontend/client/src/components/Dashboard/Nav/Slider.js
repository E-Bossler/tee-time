import React, {Component} from "react";
import Links from "./Links";
import "./stylesheet.css";

class Slider extends Component {
    render() {
        return(
            <div id='slider'>
                <Links animateNav={this.props.animateNav} navOpen={this.props.navOpen}/>
            </div>
        );
    }
};

export default Slider;