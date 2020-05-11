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
        return (
            axios.get(
                '/api/users',
                {
                    _id: userId
                }
            )
        )
    },

    verify: function (sessionToken) {
        return (
            axios.get(
                '/api/account/verify',
                {
                    _id: sessionToken,
                    // isDeleted: false
                }
            )
        )
    },

    logout: function (userId) {
        return (
            axios.get(
                '/api/account/logout',
                {
                    _id: userId
                }
            )
        )
    }
}