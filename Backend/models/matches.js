const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  participants: {
    type: Array,
    trim: true,
    required: "A match must have at least one participant",
  },
  course: {
    type: String,
    trim: true,
    required: "You must select a course",
  },
  holes: {
    type: Number,
    required: "Select 9 or 18 holes",
    default: 18,
    min: 9,
    max: 18,
  },
  parValues: {
    type: Array,
    length: 18,
  },
  day: {
    type: Date,
    default: Date.now,
  },
  chat: {
    type: Array,
  },
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
