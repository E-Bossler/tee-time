import React from "react";
import "./stylesheet.css";

function Links() {
    return(
        <ul id='nav-links' class='slide-right'>
            <li>
                <a class='nav-link' href='#'>Stats</a>
            </li>
            <li>
                <a class='nav-link' href='#'>Courses</a>
            </li>
            <li>
                <a class='nav-link' href='#'>Friends</a>
            </li>
            <li>
                <a class='nav-link' href='#'>Logout</a>
            </li>
        </ul>
    );
};

export default Links;