import React from "react";

function FriendsInput() {
    return(
        <div className="form-group">
            <label for="friends-input">Friends:</label>
            <input type="friends" className="form-control" id="friends-input" name='friends'></input>
        </div>
    );
};

export default FriendsInput;