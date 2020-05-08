import React, {Component} from "react";
import Form from "./Form";
import "./stylesheet.css";

class FormContainer extends Component {
    render() {
        return(
            <div id="form-container">
                <Form />
            </div>
        );
    }
};

export default FormContainer;