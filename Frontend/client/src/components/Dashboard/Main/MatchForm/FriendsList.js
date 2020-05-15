import React, {Component} from "react";
import "./stylesheet.css";

class FriendsList extends Component {
    render() {
        const friends = this.props.matchFriends;
        let friendsAdded = false;
        if (friends.length > 0) {
            friendsAdded = true;
        }

        return(
            <div id="friends-list-container">
                <h3>Match Players:</h3>
                <p className={friendsAdded ? "hide" : "show"}>No friends added yet</p>
                <ul id="friends-list"
                ref={this.valRef}>
                    {friends.map((value, index) => {
                        return <li 
                        key={index}
                        >
                        <p>
                            {value}
                        </p>
                        <i 
                            className={"fas fa-times"}
                            id={value}
                            onClick={this.props.handleFriendDelete}
                        >
                        </i> 
                        </li>
                    })}
                </ul>
            </div>
        );
    }
};

export default FriendsList;