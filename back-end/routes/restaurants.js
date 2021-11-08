// Routes for "/restaurants"
const router = require("express").Router(); // Router object to define a route
const axios = require("axios")

// Temporary function to generate random longitude OR latitude, centered around
// a given location with a given spread
const getRandomLocation = (location, spread) => {
    return spread / 2 - spread * Math.random() + location
}

// Function to randomly generate fake restaurant data
// (To be replaced with proxy requests to MongoDB)
const getRestaurants = async (req, res) => {
    try {
        console.log("AXIOS RESULTS")
        const response = await axios('https://api.mockaroo.com/api/ef7d4180?count=200&key=e5beaaa0')
        const data = response.data

        res.send(data)
    } catch (error) {
        res.send(error)
    }
        

    // try{
    //     // ----- GENERATE RANDOM RESTAURANT LOCATIONS - to be deleted -----
    //     // Define default location to load map
    //     const DEFAULT_LONGITUDE = -73.9936
    //     const DEFAULT_LATITUDE = 40.7218
    //     const DEFAULT_SPREAD = 0.01

    //     // Define number of restaurants to randomly generate
    //     NO_RESTAURANTS = 20

    // // Create random restaurants
    // restaurants = []
    // for (let i = 0; i < NO_RESTAURANTS; i++) {
    //     restaurants.push({
    //         "id": i,
    //         "name": "restaurant1",
    //         "number": "123-456-7890",
    //         "address": "123 5th Ave, New York, NY, 10003",
    //         "no_posts": Math.floor(Math.random() * 100),
    //         "backgroundPic" : "https://picsum.photos/0/200", 
    //         "location": {
    //             "longitude": getRandomLocation(DEFAULT_LONGITUDE, DEFAULT_SPREAD),
    //             "latitude": getRandomLocation(DEFAULT_LATITUDE, DEFAULT_SPREAD),
    //         },
    //         "logoPic" : "https://picsum.photos/250/250",
    //         "menuPopular": ["menu1", "menu2", "menu3", "menu4"],
    //         "recipesPopular": ["recipe1", "recipe2", "recipe3", "recipe4"],
    //         "menuPopularPics": ["https://picsum.photos/200/200", "https://picsum.photos/200/200", "https://picsum.photos/200/200", "https://picsum.photos/200/200"],
    //         "menuMain": ["main1", "main2", "main3", "main4", "main5", "main6", "main7", "main8"],
    //         "recipesMain" : ["recipe1", "recipe2", "recipe3", "recipe4", "recipe5", "recipe6", "recipe7", "recipe8"],
    //         "menuMainPics": ["https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200","https://picsum.photos/200/200",],
    //         "beverages": ["bev1", "bev2", "bev3", "bev4"]
            
    //     })
    // }
    //     return restaurants
    // }
    
    // catch(error){
    //     return error
    // }
    
}

// ------------------ ROUTE ENDPOINTS ------------------

// Define an endpoint to handle GET request to grab all restaurant information (no filter)
// TO-DO : Implement filtered GET request
// /restaurants
router.route("/").get((req, res) => {
    getRestaurants(req, res);
});

// TEMPORARILY EXCLUDED TO TEST OPTIMAL API CALLS
// router.route("/single/:id").get((req, res) => {
//     // Extract restaurant id from the DB
//     const id = req.params.id

//     // Make async call to API to receive all restaurants
//     // (TO BE CHANGED TO GET SINGLE RESTAURANT W MONGODB)
//     const restaurants = getRestaurants(req, res);

//     try {
//         // Try to index restaurant
//         const restaurant = restaurants[id]

//         // Send requested restaurant JSON back
//         res.send(restaurant)
//     }
//     // If getRestaurants(req, res) resulted in error, pass on error
//     catch {
//         // Notice we're sending restaurants with an 's', to pass on the error
//         // restaurant would never have been indexed in restaurants resulted in an error
//         res.send(restaurants)
//     }
    
// })
  
module.exports = router