const mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
    volunteer: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const workModel = new mongoose.model("works", workSchema);

module.exports = workModel;
