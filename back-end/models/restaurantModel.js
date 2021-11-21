// Import Schema from mongoose
const mongoose = require("mongoose");
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const URLSlugs = require('mongoose-url-slugs');

// Create exerciseSchema - we define the schema before compiling it into a model
// Data keys are a cleaned result from the Yelp API response (https://www.yelp.com/developers/documentation/v3/business_search)
const Restaurant = new Schema(
  {
    // Add the username field to the exerciseSchema schema
    name: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    address: {
      type: String,
    },
    yelp_id: {
      type: String,
    },
    yelp_url : {
      type: String,
    },
    categories: {
      alias: {
        type: String,
      },
      title: {
        type: String,
      },
    },

    restaurant_img_url: { // URL
      type: String,
    },

    location : {
      coordinates: {
        longitude: {
          type: Number,
        },
        latitude: {
          type: Number,
        },
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      state: {
        type: String,
      },
      address1: {
        type: String,
      },
      zip_code: {
        type: String,
      },
    },

    transactions: [{ // pickup, delivery
      type: String,
    }],

    posts: [{ type:mongoose.Schema.Types.ObjectId
      , ref: 'Post' }]
  });


Restaurant.plugin(beautifyUnique)

// Create a model called Exercise, compiled using the exerciseSchema - each instance of a Model is a document
const RestaurantModel = mongoose.model("Restaurant", Restaurant);

module.exports = RestaurantModel;
