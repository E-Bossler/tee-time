const mongoose = require(mongoose);

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


const matchSchema = new Schema (
    {
        participants: {
            type: Array,
            trim: true,
            required: "A match must have at least one participant"
        },
        course: {
            type: String, 
            trim: true,
            required: "You must select a course"
        },
        holes: {
            type: Number,
            required: "Select 9 or 18 holes",
            default: 18,
            min: 9,
            max: 18
        },
        parValues: {
            type: Array,
            length: 18
        }
    }
);

const roundSchema = new Schema (
    {
        golfer:  {
            type: String,
            trim: true,
            required: "Which golfer is golfing?"
        },
        matchId: {
            type: String,
            // reference the mongoose id for each match
            required: "What is the Match ID"
        },
        score: {
            type: Array
        }
    }
)

const User = mongoose.model("User", usersSchema);
const Match = mongoose.model("Match", matchSchema);
const Round = mongoose.model("Round", roundSchema)

module.exports  = User;
module.exports = Match;
module.exports = Round;