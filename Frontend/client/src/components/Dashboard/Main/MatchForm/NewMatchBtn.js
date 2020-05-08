import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./stylesheet.css";

class NewMatchBtn extends Component {
    render() {
        return(
            <div>
                <button>
                    <Link to="/dashboard/matchForm">
                        New Match
                    </Link>
                </button>
            </div>
        );
    };
};

export default NewMatchBtn;