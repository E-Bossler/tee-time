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
  matchHistory: {
    type: Array,
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: "false",
  },
  friends: [
    {
      friendId: String,
      username: String,
    },
  ],
  friendRequests: [
    {
      friendId: String,
      username: String,
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
