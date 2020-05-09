import React, {Component} from "react";
import { Link } from "react-router-dom";
import CourseInput from "./CourseInput";
import ParInput from "./ParInput";
import FriendsInput from "./FriendsInput";
import "./stylesheet.css";

class Form extends Component {
    render() {
        return(
            <div id="form">
                <CourseInput />
                <ParInput />
                <FriendsInput />
                <button id="start-match-btn">
                    <Link id="match-link" to="/dashboard/matchView">
                        Start Game
                    </Link>
                </button>
            </div>
        );
    };
};

export default Form;