// Import Restaurant MongoDB model
const Restaurant = require("../models/restaurantModel");
const mongoose = require("mongoose")
const fs = require('fs');
require('dotenv').config()

const addRestaurant = async (restaurant) => {
  const name = restaurant.name
  const phone = restaurant.phone
  const yelp_id = restaurant.id
  const yelp_url = restaurant.url
  const restaurant_img_url = restaurant.image_url
  const transactions = restaurant.transactions

  // Create Subdocument for location
  const longitude = restaurant.coordinates.longitude
  const latitude = restaurant.coordinates.latitude
  const city = restaurant.location.city
  const country = restaurant.location.country
  const state = restaurant.location.state
  const address1 = restaurant.location.address1
  const zip_code = restaurant.location.zip_code
  const categories = {
      'alias': restaurant.categories[0].alias,
      'title': restaurant.categories[0].title,
  }

  const location = {
      coordinates: {
          longitude: longitude,
          latitude: latitude
      },
      address: address1,
      city: city,
      country: country,
      state: state,
      zip_code: zip_code
  }

  // Create new Restaurant document
  let restaurantDoc = new Restaurant({ 'name': name, 'phone_number': phone, 'yelp_id': yelp_id, 'yelp_url': yelp_url, 'categories': categories, 'restaurant_img_url': restaurant_img_url, 'transactions': transactions, 'location': location, 'posts': [] });

  // Save restaurant to DB
  try {
    await restaurantDoc.save();
    console.log("saved " + name)
  } catch (err) {
    console.log("Error " + err);
  }
};


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
    const restaurants_file = fs.readFileSync('data.json');
    const restaurants_obj = JSON.parse(restaurants_file);

    const region_list = Object.keys(restaurants_obj)

    for (let i=0; i<region_list.length; i++) {
        let region = region_list[i]

        let restaurants = restaurants_obj[region]
        
        for (let j=0; j<restaurants.length; j++) {
            let restaurant = restaurants[j]
            addRestaurant(restaurant)
            
        }

    // Read data from .json file
    }
  });
} catch (error) {
  console.log(error);
}
