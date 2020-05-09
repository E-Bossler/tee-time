import React, {Component} from "react";
import "./stylesheet.css";

class FriendsList extends Component {
    render() {
        const friends = this.props.friends;
        return(
            <ul id="friends-list">
                {friends.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul>
        );
    }
};

export default FriendsList;