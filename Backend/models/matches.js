const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  participants: [
    {
      friendId: {
        type: String,
        trim: true,
      },
      username: {
        type: String,
        trim: true,
      },
    },
  ],
  course: {
    type: String,
    trim: true,
    required: "You must select a course",
  },
  holes: {
    type: Number,
    trim: true
  },
  day: {
    type: Date,
    default: Date.now,
  },
  chat: [
    {
      message: {
        type: String,
        trim: true,
      },
      messager: {
        type: String,
        trim: true,
      },
      messagerId: {
        type: String,
        trim: true,
      },
    },
  ],
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
