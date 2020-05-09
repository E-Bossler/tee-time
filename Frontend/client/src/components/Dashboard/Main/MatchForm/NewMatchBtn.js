import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./stylesheet.css";

class NewMatchBtn extends Component {
    render() {
        return(
            <div id="match-btn-container">
                <button id="new-match-btn">
                    <Link id="new-match-link" to="/dashboard/matchForm">
                        New Match
                    </Link>
                </button>
            </div>
        );
    };
};

export default NewMatchBtn;