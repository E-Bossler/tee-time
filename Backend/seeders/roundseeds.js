const mongoose = require('mongoose');
const db = require('../models');
const express = require("express");
const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  'mongodb://localhost/tee-time',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);






const roundSeed = [
  {
    golfer: 'eric@test.gmail.com',
    matchId: '1',
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    golfer: 'Austen@test.gmail.com',
    matchId: '1',
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    golfer: 'Dustin@test.gmail.com',
    matchId: '1',
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    golfer: 'Jon@test.gmail.com',
    matchId: '1',
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  }, {
    golfer: 'eric@test.gmail.com',
    matchId: '1',
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    golfer: 'Austen@test.gmail.com',
    matchId: '1',
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    golfer: 'Dustin@test.gmail.com',
    matchId: '1',
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },  {
    golfer: 'eric@test.gmail.com',
    matchId: '1',
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  }, {
    golfer: 'Jon@test.gmail.com',
    matchId: '1',
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    golfer: 'Austen@test.gmail.com',
    matchId: '1',
    score: [
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  }
]

db.Round.deleteMany({})
  .then(() => db.Round.collection.insertMany(roundSeed))
  .then(data => {
    console.log(data.result.n + " Round records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });