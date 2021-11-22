// ---------------- IMPORT EXPRESS  ----------------
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const path = require("path")
const cors = require("cors")
//const fetch = require("node-fetch");
// ---------------- IMPORT MIDDLEWARE  ----------------
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args))
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
const { METHODS } = require("http")
const mockaroo = require("mockaroo")
require("@babel/polyfill")
// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data
//enable cors requsts accros all routes
app.use(cors())
// make 'public' directory publicly readable with static content
app.use("/static", express.static("public"))

// ---------------- MongoDB Connection  ----------------

const mongoose = require("mongoose");

// Get MongoDB URI Key
const uri = process.env.ATLAS_URI;


// Connect to MongoDB
try {
  console.log("Attempting to connect to the MongoDB database..")
  // Mongoose.connect() is an async function - returns a Promise
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Create connection - similar to MySQL
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully!");
  });
} catch (error) {
  console.log(error);
}


// ---------------- LOGIN CONFIGURATION  ----------------

//Require passport initializer for login function
// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy;

// app.use(passport.initialize());
// app.use(passport.session());

// ---------------- IMPORT ROUTES  ----------------

const restaurantsRoute = require("./routes/restaurantsRoute")
const searchRoute = require("./routes/searchRoute")
const userRoute = require("./routes/userRoute")
const loginRoute = require("./routes/loginRoute")

// ---------------- ROUTES  ----------------

// Route for restaurant requests
app.use("/restaurants", restaurantsRoute)

// Route for search requeests
app.use("/search", searchRoute)

// Route for login request
app.use("/login", loginRoute)

// Route for user requests
app.use("/user", userRoute)

// Export the express app
module.exports = app
