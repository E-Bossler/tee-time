import React, {Component} from "react";
import Burger from "./Burger";
import "./stylesheet.css";
class Banner extends Component {
    render() {
        // console.log(this.props.message);
        return(
            <div id='banner'>
                <h2>Tee-Time</h2>
                <Burger animate={this.props.action} burgerClicked={this.props.clicked}/>
            </div>
        );
    }
};

export default Banner;