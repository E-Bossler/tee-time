import axios from 'axios';
import React, { Component } from "react";

export default {
    login: function (email, password) {
        return axios.post(
            '/api/account/signin',
            {
                email: email,
                password: password
            })
    },

    signUp: function (email, password, username) {
        return axios.post(
            '/api/account/signup',
            {
                email: email,
                password: password,
                username: username
            })
    },

    getUserWithId: function (userId) {
        axios.get(
            '/api/users',
            {
                _id: userId
            }
        ).then(
            response => {
                console.log("Here is the userID results:", response.data)
                for (let i=0; i<response.data.length; i++) {
                    let checkAgainstId = response.data[i]._id;
                    if (userId === checkAgainstId && response.data[i].isDeleted === false) {
                        const username = response.data[i].username
                        console.log("Username:", username)
                        return(
                                username
                        )
                    }
                }
            }
        )
    },

    verify: function (sessionToken) {
        console.log(
            'working to verify your token...',
            sessionToken)
        axios.get(
            '/api/account/verify',
            {
                _id: sessionToken,
                // isDeleted: false
            }).then(
                response => {
                    console.log("API response from database:",response.data)
                    for (let i=0; i<response.data.length; i++) {
                        let checkAgainstId = response.data[i]._id;
                        if (sessionToken === checkAgainstId && response.data[i].isDeleted === false) {
                            const userId = response.data[i].userId
                            console.log("User Id:", userId)
                            let username = this.getUserWithId(userId);
                            return username
                        }
                    }
                }
            )

    }
}