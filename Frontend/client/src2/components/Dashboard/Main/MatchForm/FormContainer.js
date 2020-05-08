import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

function FormContainer() {
  return (
    <div id="form-container">
      <Form />
      <Link to="/dashboard/game/tracker">
        <button>Start Game</button>
      </Link>
    </div>
  );
}

export default FormContainer;
