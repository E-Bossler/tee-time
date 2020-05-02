import React from "react";

function EmailInput() {
    return(
        <div className="form-group">
            <label for="email-input">Email address</label>
            <input type="email" className="form-control" id="email-input" name='email' placeholder="Email"></input>
        </div>
    )
};

export default EmailInput;