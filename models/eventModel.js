const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  teamSize: {
    type: String,
  },
  prizeModel: {
    type: String,
  },
  topic: {
    type: String,
  },
  speaker: {
    type: String,
  },
  approved: {
    type: Number,
    default: 0,
  },
});

const eventModel = new mongoose.model("events", eventSchema);
module.exports = eventModel;

//5forms -->
