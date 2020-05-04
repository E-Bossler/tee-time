import React from "react";

function PasswordInput() {
    return(
        <div className="form-group">
            <label htmlFor="password-input">Password</label>
            <input type="password" className="form-control" id="password-input" name="password" placeholder="Password"></input>
        </div>
    );
};

export default PasswordInput;