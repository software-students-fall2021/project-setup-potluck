import User from "../models/userModel"
// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const router = require("express").Router(); // Router object to define a route
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env

// the following are used for authentication with JSON Web Tokens
const _ = require("lodash") // the lodash module has some convenience functions for arrays that we use to sift through our mock user data... you don't need this if using a real database with user info
const jwt = require("jsonwebtoken")
const passport = require("passport")
const firstStrategy = require('passport-local').Strategy;
app.use(passport.initialize()) // tell express to use passport middleware
app.use(passport.session());

passport.use(new firstStrategy(User.authenticate()));

// a route to handle logging out users
router.route("/logout").get((req, res) => {
    var name = req.user.username;
    console.log("Logging out: " + req.user.username)
    req.logout();
    res.redirect('/');  //TODO: Does this redirection need to occur in the front-end?
    req.session.notice = "You have successfully been logged out " + name + "!";
});