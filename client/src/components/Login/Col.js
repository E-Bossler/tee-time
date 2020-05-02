import React from "react";
import EmailInput from "../Login/EmailInput";
import PasswordInput from "../Login/PasswordInput";
import "./stylesheet.css";

function Col() {
    return(
        <div className="col text-center">
            <h1>Welcome to Tee Time</h1>
                <form>
                    <EmailInput/>
                    <PasswordInput />
                    <button type="submit" id='login-btn' className="btn btn-default">Login</button>
                </form>
                <div>
                <p>Don't have an account? Sign up <a href="/signup">here</a></p>
            </div>
        </div>
    )
};

export default Col;