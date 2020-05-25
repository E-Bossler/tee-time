import React, { Component } from "react";
import api from "../../../../utils/api";
import { getFromStorage } from "../../../../utils/storage";



class Stats extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            userMatchHistory: [1234],
            userBestMatch: [1234],
            userMostRecentMatch: [1234],
            userFavoriteCourse: '1234',
            userHandicap: [11234]
        }

    };

    componentDidMount() {
        this.findUserStats();
    };

    findUserStats() {
        // get token from storage
        let key = "SessionToken";
        const sessionToken = getFromStorage(key);
        // search user session db

        api.verify(sessionToken).then(response => {
            for (let i = 0; i < response.data.length; i++) {
                let checkAgainstId = response.data[i]._id;
                if (
                    sessionToken === checkAgainstId &&
                    response.data[i].isDeleted === false
                ) {
                    const userId = response.data[i].userId;
                    api.getUserWithId(userId).then(response => {
                        for (let i = 0; i < response.data.length; i++) {
                            let checkAgainstId = response.data[i]._id;
                            if (
                                userId === checkAgainstId &&
                                response.data[i].isDeleted === false
                            ) {
                                const username = response.data[i].username;
                                const userMatchHistory = response.data[i].matchHistory
                                this.setState({
                                    username: username,
                                    userMatchHistory: userMatchHistory
                                });

                                this.findUserBestMatch(username)
                                this.findUserMostRecentMatch(username)
                                this.findUserFavoriteCourse(username)
                                this.calculateUserHandicap(username)

                                console.log("Username: ", this.state.username)
                                console.log("User match history: ", this.state.userMatchHistory)
                                console.log("User best match: ", this.state.userBestMatch)
                                console.log("User most recent match: ", this.state.userMostRecentMatch)
                                console.log("User favorite course: ", this.state.userFavoriteCourse)
                                console.log("Handicap: ", this.state.userHandicap)
                            }
                        }
                    });
                }
            }
        });
    }


    findUserBestMatch(username) {



        // this.setState({
        //     userBestMatch: userBestMatch,
        // })
    }

    findUserMostRecentMatch(username) {



        // this.setState({
        //     userMostRecentMatch: userMostRecentMatch,
        // })
    }

    findUserFavoriteCourse(username) {



        // this.setState({
        //     userFavoriteCourse: userFavoriteCourse,
        // })
    }

    calculateUserHandicap(username) {



        // this.setState({
        //     userHandicap: userHandicap,
        // })
    }








render() {

    return (
        <div>
            <h3>Stats for {this.state.username}:</h3>
            <ul>
                <li>Personal Best:</li>
                {this.state.userBestMatch}
                <li>Most Recent Match:</li>
                {this.state.userMostRecentMatch}
                <li>Favorite Course:</li>
                {this.state.userFavoriteCourse}
                <li>Handicap:</li>
                {this.state.userHandicap}
            </ul>
        </div>
    );
}
};

export default Stats;