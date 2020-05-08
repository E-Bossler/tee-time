import React from "react";
import { Link } from "react-router-dom";
import EmailInput from "../Signup/EmailInput";
import PasswordInput from "../Signup/PasswordInput";
import "./stylesheet.css";

function Col() {
  return (
    <div className="col text-center">
      <h1>Welcome to Tee-Time!</h1>
      <form>
        <EmailInput />
        <PasswordInput />
        <Link to="/dashboard">
          <button type="submit" id="login-btn" className="btn btn-default">
            Sign Up
          </button>
        </Link>
      </form>
      <div>
        <p>
          Already have an account? Log in <Link to="/">here</Link>
        </p>
      </div>
    </div>
  );
}

export default Col;
