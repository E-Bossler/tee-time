const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: "Please enter an email address",
  },
  password: {
    type: String,
    trim: true,
    required: "Please enter a valid Password",
  },
  username: {
    type: String,
    trim: true,
    required: "Please enter a valid Username",
  },
  currentMatch: {
    courseId: String,
    courseName: {
      type: String,
      trim: true,
    },
    holes: [
      {
        number: Number,
        score: Number,
      },
    ],
    players: [
      {
        username: String,
        friendId: String,
        currentMatchId: String,
      },
    ],
  },

  matchHistory: {
    type: Array,
  },
  isDeleted: {
    type: Boolean,
    default: "false",
  },
  friends: [
    {
      friendId: {
        type: String,
        trim: true,
      },
      username: {
        type: String,
        trim: true,
      },
      currentMatchId: {
        type: String,
        defaultValue: "",
        trim: true,
      },
    },
  ],
  friendRequests: [
    {
      friendId: {
        type: String,
        trim: true,
      },
      username: {
        type: String,
        trim: true,
      },
      currentMatchId: {
        type: String,
        defaultValue: "",
        trim: true,
      },
    },
  ],
});

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
