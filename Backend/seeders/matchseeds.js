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


const matchSeed = [
  {
    participants: [
      'eric@test.gmail.com', 'Austen@test.gmail.com', 'Dustin@test.gmail.com', 'Jon@test.gmail.com'
    ],
    course: "Interbay Golf Course",
    holes: 18,
    parValues: [
      //fake data for the purpose of getting it to work... for now
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    participants: [
      'eric@test.gmail.com', 'Austen@test.gmail.com', 'Dustin@test.gmail.com'
    ],
    course: "Jackson Park Golf Course",
    holes: 18,
    parValues: [
      //fake data for the purpose of getting it to work... for now
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    participants: [
      'eric@test.gmail.com', 'Jon@test.gmail.com'
    ],
    course: "Jefferson Park Golf Course",
    holes: 18,
    parValues: [
      //fake data for the purpose of getting it to work... for now
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  },
  {
    participants: [
      'Austen@test.gmail.com'
    ],
    course: "West Seattle Golf Course",
    holes: 18,
    parValues: [
      //fake data for the purpose of getting it to work... for now
      3, 4, 3, 4, 5, 3, 4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 5, 4
    ]
  }
]

db.Match.deleteMany({})
  .then(() => db.Match.collection.insertMany(matchSeed))
  .then(data => {
    console.log(data.result.n + " Match records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



