// Routes for "/restaurants"
const router = require("express").Router(); // Router object to define a route
const axios = require("axios")
const Restaurant = require("../models/restaurantModel")

// Function to randomly generate fake restaurant data
// (To be replaced with proxy requests to MongoDB)
const getRestaurants = async (req, res) => {

    // Grab array of restaurant JSONs from Mockaroo
    try {
        // Query all restaurant results
        const response = await Restaurant.find({}).exec();
        res.send(response)
    } catch (error) {
        res.send(error)
    }
    
}

// ------------------ ROUTE ENDPOINTS ------------------

// Define an endpoint to handle GET request to grab all restaurant information (no filter)
// TO-DO : Implement filtered GET request
// /restaurants
router.route("/").get((req, res) => {
    getRestaurants(req, res);
});

router.route("/single/:id").get((req, res) => {
    // Extract restaurant id from the DB
    const id = req.params.id

    // Make async call to API to receive all restaurants
    // (TO BE CHANGED TO GET SINGLE RESTAURANT W MONGODB)
    const restaurants = getRestaurants(req, res);

    try {
        // Try to index restaurant
        const restaurant = restaurants[id]

        // Send requested restaurant JSON back
        res.send(restaurant)
    }
    // If getRestaurants(req, res) resulted in error, pass on error
    catch (err){
        // Notice we're sending restaurants with an 's', to pass on the error
        // restaurant would never have been indexed in restaurants resulted in an error
        res.send(err)
    }
    
})
  
module.exports = router