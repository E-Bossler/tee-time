import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";
import "./stylesheet.css";

function Nav() {
    return(
        <nav>
            <Banner />
            <Slider />
        </nav>
    );
};

export default Nav;