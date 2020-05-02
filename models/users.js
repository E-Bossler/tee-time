const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema (
    {
        userName: {
            type: String,
            trim: true,
            required: "Please enter a Username"
        },
        firstName: {
            type: String,
            trim: true,
            required: "Please enter a first name"
        },
        email: {
            type: String,
            trim: true,
            required: "Please enter an email address"
        },
        // Maybe we don't need this
        password: {
            type: String,
            trim: true,
            required: "Please enter a valid Password"
        },
        matchHistory: {
            type: Array,
            trim: true
        }
    }
);

const User = mongoose.model("User", usersSchema);

module.exports  = User;
