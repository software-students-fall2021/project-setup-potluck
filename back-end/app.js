// ---------------- IMPORT EXPRESS  ---------------- 
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const path = require("path")

// ---------------- IMPORT MIDDLEWARE  ---------------- 

const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
const { METHODS } = require("http")

// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// make 'public' directory publicly readable with static content
app.use("/static", express.static("public"))

// ---------------- IMPORT ROUTES  ---------------- 

const restaurantsRoute = require("./routes/restaurants");;

// ---------------- ROUTES  ---------------- 

// Routes for querying MongoDB - users & exercises
app.use("/restaurants", restaurantsRoute);

// Export the express app
module.exports = app