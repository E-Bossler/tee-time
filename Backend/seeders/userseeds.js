const mongoose = require("mongoose");
const db = require("../models");
const express = require("express");
const app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/tee-time", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const userSeed = [
  {
    email: "eric@test.gmail.com",
    password: "password",
    username: "erictest",
    matchHistory: [1, 2, 3, 4],
    isDeleted: false,
    friends: [],
  },
  {
    email: "Austen@test.gmail.com",
    password: "password",
    username: "austentest",
    matchHistory: [1, 2, 3, 4],
    isDeleted: false,
    friends: [],
  },
  {
    email: "Dustin@test.gmail.com",
    password: "password",
    username: "dustintest",
    matchHistory: [1, 2, 3, 4],
    isDeleted: false,
    friends: [],
  },
  {
    email: "Jon@test.gmail.com",
    password: "password",
    username: "jontest",
    matchHistory: [1, 2, 3, 4],
    isDeleted: false,
    friends: [],
  },
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " User records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
