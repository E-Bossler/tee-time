import React from "react";
import EmailInput from "../Login/EmailInput";
import PasswordInput from "../Login/PasswordInput";
import { Link } from "react-router-dom";

function Col() {
  return (
    <div className="col text-center">
      <h1>Welcome to Tee-Time!</h1>
      <form>
        <EmailInput />
        <PasswordInput />
        <Link to="/dashboard">
          <button type="submit" id="login-btn" className="btn btn-default">
            Login
          </button>
        </Link>
      </form>
      <div>
        <p>
          Don't have an account? Sign up <Link to="/signup">here</Link>
        </p>
      </div>
    </div>
  );
}

export default Col;
