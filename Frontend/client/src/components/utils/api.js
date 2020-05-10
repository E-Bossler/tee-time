import axios from 'axios';

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

    verify: function (sessionToken) {
        console.log(
            'working to verify your token...',
            sessionToken)
        return (axios.get('/api/account/verify',
            {
                params: {
                    _id: sessionToken,
                    isDeleted: false
                }
            })
        )
        // .then(
        //     results => {
        //         console.log(results)
        //         // return(
        //         //     results
        //         // )
        //     }
        // ).catch(
        //     err => console.log(err)
        // )
    }
}