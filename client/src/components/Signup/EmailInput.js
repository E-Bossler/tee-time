import React from "react";
import "./stylesheet.css";

function EmailInput() {
    return(
        <div className="form-group">
            <label htmlFor="email-input">Email address</label>
            <input type="email" className="form-control" id="email-input" name='email' placeholder="Email"></input>
        </div>
    )
};

export default EmailInput;