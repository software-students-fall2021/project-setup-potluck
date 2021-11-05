// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const path = require("path")

// import some useful middleware
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests

// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// make 'public' directory publicly readable with static content
app.use("/static", express.static("public"))

// Handle GET request to grab all restaurant information (no filter)
app.use("/restaurants", (req, res) => {

    // ----- GENERATE RANDOM RESTAURANT LOCATIONS - to be deleted -----
    // Define default location to load map
    const DEFAULT_LONGITUDE = -73.9936
    const DEFAULT_LATITUDE = 40.7218
    const DEFAULT_SPRAD = 0.02

    // Temporary function to generate random longitude OR latitude, centered around
    // a given location with a given spread
    const getRandomLocation = (location, spread) => {
        return spread / 2 - spread * Math.random() + location
    }
    
    // Define number of restaurants to randomly generate
    NO_RESTAURANTS = 20

    // Create random restaurants
    restaurants = []
    for (let i = 0; i < NO_RESTAURANTS; i++) {
        restaurants.push({
            "name": "restaurant1",
            "number": "123-456-7890",
            "address": "123 5th Ave, New York, NY, 10003",
            "no_posts": Math.random() * 100,
            "location": {
                "longitude": getRandomLocation(-73.9936, 0.01),
                "latitude": getRandomLocation(-73.9936, 0.01),
            },
            "menu": ["menu1", "menu2", "menu3", "menu4"]
        })
    }

    // Send restaurants as response
    res.send(restaurants)
})