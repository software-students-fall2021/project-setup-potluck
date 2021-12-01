// Import Restaurant MongoDB model
const Restaurant = require("../models/restaurantModel");
const mongoose = require("mongoose")
const fs = require('fs');
require('dotenv').config()




// ---------------- MongoDB Connection  ----------------
// Get MongoDB URI Key
const uri = process.env.ATLAS_URI;

// Connect to MongoDB
try {
  // Mongoose.connect() is an async function - returns a Promise
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Create connection - similar to MySQL
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully!");
    
    // Create new Restaurant document
    let restaurantDoc = new Restaurant({ 
        'name': "test", 
        'phone': "test", 
        'yelp_id': "test", 
        'yelp_url': "test", 
        'categories': 
            {
                'alias':"test", 
                'title':"test"
            }, 
        'url': "test", 
        'restaurant_img_url': "test", 
        'transactions': ["transactions"], 
        'location': {
            'coordinates': {
                'longitude': 3,
                'latitude': 3
            },
            'city': "test",
            'country':"test",
            'state': "test",
            'address1': "test",
            'zip_code' : "test",
        },
        'posts': [] 
    });

    // Save restaurant to DB
    try {
        restaurantDoc.save();
    } catch (err) {
        console.log("Error " + err);
    }

  });
} catch (error) {
  console.log(error);
}
