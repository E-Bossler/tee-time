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
            <div id='burger' onClick={this.animate} className={ this.state.clicked ? "open" : "closed"}>
                <div class='line' id='line1' style={styles.open.line1}></div>
                <div class='line' id='line2'></div>
                <div class='line' id='line3'></div>
            </div>
        );
    }
};

export default Burger;