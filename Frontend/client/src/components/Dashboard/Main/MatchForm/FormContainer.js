import React from "react";
import Form from "./Form";
import "./stylesheet.css";

function FormContainer() {
    return(
        <div id="form-container">
            <Form />
            <button>Start Game</button>
        </div>
    );
};

export default FormContainer;