const User = require("../models/userModel")
const genToken = require( "../passportStrategies/tokenGenerator")
// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const router = require("express").Router(); // Router object to define a route
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const bcrypt = require('bcrypt')
// the following are used for authentication with JSON Web Tokens
const _ = require("lodash") // the lodash module has some convenience functions for arrays that we use to sift through our mock user data... you don't need this if using a real database with user info
const jwt = require("jsonwebtoken")
const passport = require("passport")
const firstStrategy = require('passport-local').Strategy;
const  passConfig= require("../passportStrategies/passport")
const tokenGen = require('../passportStrategies/tokenGenerator')
app.use(passport.initialize()) // tell express to use passport middleware
app.use(passport.session());

passport.use(new firstStrategy(User.authenticate()));


passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    User.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

//Function that sends new user to database
const postNewUser = async (req, res) => {

    // User.register(new User({ username: req.body.username, email: req.body.email, image: "", posts: [] }), req.body.password, (err) => {
    //     if (err){
    //         console.log("Error in registration process: ", err)
    //         res.send(err)
    //         //return res;
    //     }
    //     else{
    //         console.log("User successfully registered");
            
    //         //Since the user is now registered, log them in
    //         req.login(User, function(err){
    //             if (err) { return next(err); }
    //             return res;
    //         });

    //         res.json({status: "Success", redirect: '/'});
    //     }
    
    // });
   
    let userPass ="";
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(req.body.password, salt, function(err, hash) {
          if (err) return next(err);
          userPass = hash; // Or however suits your setup
          // Store the user to the database, then send the response
        });
      });
    
    let isUser = await User.findOne({email:req.body.email});
    if(isUser){
        return(res.status(403).json({error:'Email alreay in use'}));
    }
    const newUser = new User({ username: req.body.username, email: req.body.email, image: "", posts: [],  password:userPass})
    

    
    await newUser.save();
    const token = genToken(newUser)
    console.log(token)
    res.status(200).json({token})
}

router.route("/").post((req, res) => {
    postNewUser(req, res);
});

router.route("/register").post((req, res) => {

    try {
        postNewUser(req, res);
    }
    catch (err){
        res.send(err)
    }
    
})

module.exports = router;