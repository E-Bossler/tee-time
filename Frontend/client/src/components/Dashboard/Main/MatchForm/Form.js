import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CourseInput from "./CourseInput";
import FriendsInput from "./FriendsInput";
import FriendsList from "./FriendsList";
import "./stylesheet.css";

const findUser = (friend, friends, user) => {
    axios
      .post("/api/dashboard/userMenu/friends", { friend, user })
      .then(res => {
        if (res.data === "Friend added!") {
          this.setState({ friends: [...friends, friend] });
        } else if (res.data === "Friend not Found.") {
          alert("You have added a friend that isn't in our records.");
        }
      });
}

class Form extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          username: this.props.username,
          friend: "",
          friends: [],
        };
    }

    componentDidMount() {
        const user = this.state.username;
        axios.put("/api/dashboard/userMenu/friends", { user }).then(res => {
          const friends = res.data[0].Friends;
          if (friends === undefined) {
            alert("You don't have any friends! Add friends to become popular!");
          } else {
            this.setState({ friends });
          }
        });
    }

    handleInputChange(event) {
        let value = event.target.value;
        this.setState({ friend: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const friend = this.state.friendName;
        const friends = this.state.friends;
        const user = this.state.username;
        friends.push(this.state.friend);
        this.setState({ friends: friends });

        console.log(friend, user);

        findUser(friend, user);

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