// ---------------- IMPORT EXPRESS  ---------------- 
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const path = require("path")
const cors = require("cors");
//const fetch = require("node-fetch");
// ---------------- IMPORT MIDDLEWARE  ---------------- 
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
const { METHODS } = require("http")
const mockaroo = require("mockaroo")

// following are important for posting feeds by users
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const _ = require('lodash');

// require("@babel/polyfill")
// import '@babel/polyfill'
// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data
//enable cors requsts accros all routes
app.use(cors());
// make 'public' directory publicly readable with static content
app.use("/static", express.static("public"))

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
// ---------------- LOGIN CONFIGURATION  ---------------- 

//Require passport initializer for login function
// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy;

// app.use(passport.initialize());
// app.use(passport.session());

// ---------------- IMPORT ROUTES  ---------------- 

const restaurantsRoute = require("./routes/restaurants")

const searchRoute = require("./routes/searchRoute")

const userRoute = require("./routes/userRoute")
const postFeed = require("./routes/postFeed")

// ---------------- ROUTES  ---------------- 

// Route for restaurant GET requests
app.use("/restaurants", restaurantsRoute);

app.use("/search", searchRoute);


//for jin: user_Retrieval route
// app.use("/user", userRoute);

app.use("/post-feed", postFeed)
// Export the express app
module.exports = app
