import React, {Component} from "react";
import "./stylesheet.css";

class NewMatchBtn extends Component {
    render() {
        return(
            <div>
                <button 
                    onClick={this.props.action} 
                    className={ this.props.clicked ? "hideNewMatchBtn" : "showNewMatchBtn"}>
                    New Match
                </button>
            </div>
        );
    };
};

export default NewMatchBtn;