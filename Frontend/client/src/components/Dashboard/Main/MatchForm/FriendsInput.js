import React, { Component } from "react";
import "./stylesheet.css";

class FriendsInput extends Component {
    render() {
        return(
            <div className="form-group">
                <label 
                    htmlFor="friends-input">
                    Find Friends:
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="friends-input" 
                    name='friend'
                    defaultValue={this.props.friend}
                    onChange={this.props.handleInputChange}
                >
                </input>
                <p className={this.props.friendFound ? "show" : "hide"}>
                    Sorry, that user is not on your friends list.
                </p>
                <button 
                    id="add-friend-btn" 
                    onClick={this.props.handleSubmit}>
                    Add Friend
                </button>
            </div>
        );
    }
};

export default FriendsInput;