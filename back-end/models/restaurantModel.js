// Import Schema from mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create exerciseSchema - we define the schema before compiling it into a model
// Data keys are a cleaned result from the Yelp API response (https://www.yelp.com/developers/documentation/v3/business_search)
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
    yelp_id: {
      type: String,
      required: true
    },
    yelp_url : {
      type: String,
      required: true,
    },
    categories: {
      alias: {
        type: String,
        required: true
      }
    },
    restaurant_img_url: { // URL
      type: String,
      required: true,
    },
    location : {
      coordinates: {
        longitude: {
          type: Number,
          required: true,
        },
        latitude: {
          type: Number,
          required: true,
        },
      },
      city: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      address1: {
        type: String,
        required: true
      },
      zip_code: {
        type: String,
        required: true
      },
    },
    transactions: { // pickup, delivery
      type: String,
      required: true
    },
    no_posts: {
      type: Number,
      required: true,
    },

    posts: [  { type: Schema.Types.ObjectId, ref: 'Post' }]
  }
);

// Create a model called Exercise, compiled using the exerciseSchema - each instance of a Model is a document
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
