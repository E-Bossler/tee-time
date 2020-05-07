import React from "react";
import CourseInput from "./CourseInput";
import ParInput from "./ParInput";
import FriendsInput from "./FriendsInput";
import "./stylesheet.css";

function Form() {
    return(
        <div>
            <CourseInput />
            <ParInput />
            <FriendsInput />
        </div>
    );
};

export default Form;