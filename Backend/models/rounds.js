const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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

const Round = mongoose.model("Round", roundSchema)

module.exports = Round;