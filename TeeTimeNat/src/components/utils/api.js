import axios from 'axios';

const api = {
  // logs the user in, creates a new usersession for the user

  login: function(email, password) {
    console.log(email, password);
    return axios.post('http://192.168.138.2:7777/api/account/signin', {
      email: email,
      password: password,
    });
  },

  // creates a new user in the db

  signUp: function(email, password, username) {
    return axios.post('http://192.168.138.2:7777/api/account/signup', {
      email: email,
      password: password,
      username: username,
    });
  },

  // finds the username from the db with the userid as input

  getUserWithId: function(userId) {
    return axios.get('http://192.168.138.2:7777/api/users', {
      _id: userId,
    });
  },

  //verify the session token is valid and that the person is logged in

  verify: function(sessionToken) {
    return axios.get('http://192.168.138.2:7777/api/account/verify', {
      _id: sessionToken,
      // isDeleted: false
    });
  },

  //logs the loser out, clears out sessiontoken from storage

  logout: function(userId) {
    return axios.get('http://192.168.138.2:7777/api/account/logout', {
      _id: userId,
    });
  },

  //creates a new match in the database, assigns it a course, and adds users to the match

  newMatch: function(users, course) {
    return axios.post('/api/match/new', {
      // INPUT THE REQUEST OBJECT HERE
    });
  },

  // each match is composed of rounds, must have have least one round
  // one round for each user, rouds married to users with user ids

  newRound: function(user, course) {
    return axios.post('/api/round/new', {
      // INPUT THE REQUEST OBJECT HERE
    });
  },

  // this will post the match history to the database upon completion

  addMatchToHistory: function(match, users) {
    return axios.post('/api/match/history', {
      // INPUT THE REQUEST OBJECT HERE
    });
  },

  //collects the history from the db for the user to review
  // consider adding statistics if have time

  getMatchHistory: function(user) {
    return axios.get('/api/match/history', {
      // INPUT THE REQUEST OBJECT HERE
    });
  },
};

export default api;