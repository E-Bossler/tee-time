import React, {Component} from "react";
import CourseInput from "./CourseInput";
import ParInput from "./ParInput";
import FriendsInput from "./FriendsInput";
import "./stylesheet.css";

class Form extends Component {
    render() {
        return(
            <div className={ this.props.clicked ? "showForm" : "hideForm"}>
                <CourseInput />
                <ParInput />
                <FriendsInput />
                <button onClick={this.props.switchMatchView}>
                    Start Game
                </button>
            </div>
        );
    };
};

export default Form;