// Routes for "/restaurants"
const router = require("express").Router(); // Router object to define a route

// Temporary function to generate random longitude OR latitude, centered around
// a given location with a given spread
const getRandomLocation = (location, spread) => {
    return spread / 2 - spread * Math.random() + location
}

// Function to randomly generate fake restaurant data
// (To be replaced with proxy requests to MongoDB)
const getRestaurants = (req, res) => {
    try{
        //set cors header ignore this as long as CORS Middleware is active
        //res.header("Acces-Control-Allow-Origin", "*");
    console.log("HI");
    // ----- GENERATE RANDOM RESTAURANT LOCATIONS - to be deleted -----
    // Define default location to load map
    const DEFAULT_LONGITUDE = -73.9936
    const DEFAULT_LATITUDE = 40.7218
    const DEFAULT_SPREAD = 0.01

    // Define number of restaurants to randomly generate
    NO_RESTAURANTS = 20

    // Create random restaurants
    restaurants = []
    for (let i = 0; i < NO_RESTAURANTS; i++) {
        restaurants.push({
            "restaurant_id": i,
            "name": "restaurant1",
            "number": "123-456-7890",
            "address": "123 5th Ave, New York, NY, 10003",
            "no_posts": Math.floor(Math.random() * 100),
            "location": {
                "longitude": getRandomLocation(DEFAULT_LONGITUDE, DEFAULT_SPREAD),
                "latitude": getRandomLocation(DEFAULT_LATITUDE, DEFAULT_SPREAD),
            },
            "menu": ["menu1", "menu2", "menu3", "menu4"]
        })
    }

    // Send restaurants as response
    res.json(restaurants)}
    catch(error){
        res.send(error);

    }
    
}

// ------------------ ROUTE ENDPOINTS ------------------

// Define an endpoint to handle GET request to grab all restaurant information (no filter)
// TO-DO : Implement filtered GET request
// /restaurants
router.route("/").get((req, res) => {
    getRestaurants(req, res);
});
  
module.exports = router