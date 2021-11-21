// Import Schema from mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create exerciseSchema - we define the schema before compiling it into a model
const exerciseSchema = new Schema(
  {
    // Add the username field to the exerciseSchema schema
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create a model called Exercise, compiled using the exerciseSchema - each instance of a Model is a document
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
