import React, { Component } from "react";
import API from '../utils/api';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from '../../pages/Dashboard'

// import Form from "../components/Login/Form"
// // import Greens from "../components/GreensCSS/Greens"
// import Container from "../Login/Container";

import {
    getFromStorage,
    setInStorage
} from "../utils/storage"

class LogInForm extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value
        API.login(
            email,
            password
        ).then(
            result => {
                setInStorage(result.data.token, result);
                // return (
                //     <Route
                //         exact path="/dashboard"
                //         component={Dashboard}>
                //     </Route>
                // )
            }
        )
    }

    render() {
        return (
            <div
                className="container">
                <div
                    className="row">
                    <div
                        className="col text-center">
                        <h1>Welcome to Tee-Time!</h1>
                        <form>
                            <div
                                className="form-group">
                                <label
                                    htmlFor="email-input">
                                    Email address
                                        </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email-input"
                                    name='email'
                                    placeholder="Email">

                                </input>
                            </div>
                            <div
                                className="form-group">
                                <label
                                    htmlFor="password-input">
                                    Password
                                        </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password-input"
                                    name="password"
                                    placeholder="Password">

                                </input>
                            </div>
                            <button
                                type="submit"
                                id='login-btn'
                                className="btn btn-default"
                                onClick={
                                    this.handleSubmit
                                }
                            >Login
                                </button>
                        </form>
                        <div>
                            <p>Don't have an account? Sign up <a
                                href="/signup">here</a></p>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default LogInForm;