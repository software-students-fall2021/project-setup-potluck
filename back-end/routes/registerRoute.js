// import User from "../models/userModel"
// // import and instantiate express
// const express = require("express") // CommonJS import style!
// const app = express() // instantiate an Express object
// require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env

// // the following are used for authentication with JSON Web Tokens
// const _ = require("lodash") // the lodash module has some convenience functions for arrays that we use to sift through our mock user data... you don't need this if using a real database with user info
// const jwt = require("jsonwebtoken")
// const passport = require("passport")
// Strategy = require('passport-local').Strategy;
// app.use(passport.initialize()) // tell express to use passport middleware
// app.use(passport.session());

// passport.use(new Strategy(User.authenticate()));

// passport.serializeUser(function (user, cb) {
//     cb(null, user.id);
// });

// passport.deserializeUser(function (id, cb) {
//     User.findById(id, function (err, user) {
//         if (err) { return cb(err); }
//         cb(null, user);
//     });
// });

// app.post('/register', (req, res) => {

//     console.log('registering user')
//     User.register(new User({ username: req.body.username, email: req.body.email, image: "", posts: [] }), req.body.password, (err) => {
//         if (err){
//             console.log("error in registration process.")
//         }
//         else{
//             console.log("user successfully registered");

//             //Since the user is now registered, log them in
//             req.login(user, function(err){
//                 if (err) { return next(err); }
//                 return res.redirect('/');
//             });

//             res.redirect('/login');
//         }
    
//     });

// });