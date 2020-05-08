import React, {Component} from "react";
import "./stylesheet.css";

class Burger extends Component {
    state = {
        clicked: false
    };

    animate = () => {
        if (this.state.clicked) {
            this.setState({ clicked: false })
        } else {
            this.setState({ clicked: true });
        }
    };

    render() {
        return(
            <div id='burger' onClick={this.animate}>
                <div className={ this.state.clicked ? "line toggle1" : "line"} id='line1'></div>
                <div className={ this.state.clicked ? "line toggle2" : "line"} id='line2'></div>
                <div className={ this.state.clicked ? "line toggle3" : "line"} id='line3'></div>
            </div>
        );
    }
};

export default Burger;