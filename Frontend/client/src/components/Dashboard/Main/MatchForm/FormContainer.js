import React, { Component } from "react";
import Form from "./Form";
import "./stylesheet.css";

class FormContainer extends Component {
  render() {
    return (
      <div id="form-container">
        <Form userData={this.props.userData} username={this.props.username} />
      </div>
    );
  }
}

export default FormContainer;
