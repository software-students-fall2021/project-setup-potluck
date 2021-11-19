// Import Schema from mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create exerciseSchema - we define the schema before compiling it into a model
const restaurantSchema = new Schema(
  {
    // Add the username field to the exerciseSchema schema
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    no_posts: {
      type: Number,
      required: true,
    },
    backgroundPic: { // URL
      type: String,
      required: true,
    },
    location: {
      longitude: {
        type: Number,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
    },
    menuPopular: {

    }
  }
);

const 

// Create a model called Exercise, compiled using the exerciseSchema - each instance of a Model is a document
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
