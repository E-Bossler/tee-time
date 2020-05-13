import React, {Component} from "react";
import { Link } from "react-router-dom";
import CourseInput from "./CourseInput";
import FriendsInput from "./FriendsInput";
import FriendsList from "./FriendsList";
import "./stylesheet.css";

const findUser = name => {
    fetch("http://localhost:7777/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "no-cors",
        Origin: "http://localhost:3000/dashboard/matchForm",
        body: JSON.stringify(name)
    }).then(res => {
        console.log("hello");
        res.json();
        console.log(res);
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.error("Error:", error);
    })
}

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            friend: "",
            friends: []
        }
    }

    handleInputChange(event) {
        let value = event.target.value;
        this.setState({ friend: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const friends = this.state.friends;
        friends.push(this.state.friend);
        this.setState({ friends: friends });

        console.log(this.state.friend);

        findUser(this.state.friend);

        this.setState({ friend: "" });
    }

    render() {
        return(
            <div id="form">
                <CourseInput />
                <FriendsInput 
                    handleSubmit={this.handleSubmit.bind(this)} 
                    handleInputChange={this.handleInputChange.bind(this)} 
                    friend={this.state.friend}
                />
                <FriendsList 
                    friends={this.state.friends}
                />
                <button id="start-match-btn">
                    <Link id="match-link" to="/dashboard/matchView">
                        Start Game
                    </Link>
                </button>
            </div>
        );
    };
};

export default Form;