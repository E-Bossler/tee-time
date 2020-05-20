const mongoose = require("mongoose");
const db = require("../models");
const express = require("express");
const bcrypt = require("bcrypt");
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
    email: "dustin.guy.jackson@gmail.com",
    password: bcrypt.hashSync("Raptor99!", bcrypt.genSaltSync(8), null),
    username: "dustin.guy.jackson@gmail.com",
    currentMatch: {},
    matchHistory: [],
    isDeleted: false,
    friends: [],
    friendRequests: [],
  },
  {
    email: "amber@gmail.com",
    password: bcrypt.hashSync("ber", bcrypt.genSaltSync(8), null),
    username: "amber@gmail.com",
    currentMatch: {},
    matchHistory: [],
    isDeleted: false,
    friends: [],
    friendRequests: [],
  },
  {
    email: "hardibois@gmail.com",
    password: bcrypt.hashSync("har", bcrypt.genSaltSync(8), null),
    username: "hardibois@gmail.com",
    currentMatch: {},
    matchHistory: [],
    isDeleted: false,
    friends: [],
    friendRequests: [],
  },
  {
    email: "alhommer5678@gmail.com",
    password: bcrypt.hashSync("Raptor99!", bcrypt.genSaltSync(8), null),
    username: "alhommer5678@gmail.com",
    currentMatch: {},
    matchHistory: [],
    isDeleted: false,
    friends: [],
    friendRequests: [],
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
