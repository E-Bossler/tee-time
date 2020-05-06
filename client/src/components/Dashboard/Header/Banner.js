import React from "react";
import Burger from "./Burger";
import "./stylesheet.css";

function Banner() {
    return(
        <div id='banner'>
            <h2>Tee Time</h2>
            <Burger />
        </div>
    );
};

export default Banner;