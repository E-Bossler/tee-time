import React from "react";
import "./stylesheet.css";

function UserNameInput() {
    return (
        <div className="form-group">
            <label
                htmlFor="email-input"
            >
            Username
            </label>
            <input
                type="text"
                className="form-control"
                id="username-input"
                name='username'
                placeholder="Username"
            ></input>
        </div>
    )
};

export default UserNameInput;