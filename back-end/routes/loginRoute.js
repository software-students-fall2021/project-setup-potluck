// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const router = require("express").Router(); // Router object to define a route
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
import { ContextBuilder } from "express-validator/src/context-builder";
import User from "../models/userModel"
// the following are used for authentication with JSON Web Tokens
const _ = require("lodash") // the lodash module has some convenience functions for arrays that we use to sift through our mock user data... you don't need this if using a real database with user info
const jwt = require("jsonwebtoken")
const passport = require("passport")
const Strategy = require('passport-local').Strategy;
const { response } = require("../app");
const bcrypt = require('bcrypt')
import genToken from "../passportStrategies/tokenGenerator";
app.use(passport.initialize()) // tell express to use passport middleware
app.use(passport.session());

// const attemptLogin = async (req, res) => {

//   passport.authenticate('local', ()=> {
    
//   });

//   console.log('authenticated!')
// }

passport.use(new Strategy(User.authenticate()))


router.route("/").post( async(req,response)=>{

  const username = req.body.username
  const password = req.body.password

  if (!username || !password) {
    // no username or password received in the POST body... send an error
    response
      .status(401)
      .json({ success: false, message: `no username or password supplied.` })
  }

  let isUser = await User.findOne({username: username});
  if(!isUser){
    console.log("LMAO")
    response.status(401).json({success: false, message: 'user doesnt exist'})
  }
  else{
    bcrypt.compare(password, isUser.password, function(err, res){
      if(err){console.log(err)}
      if(res){
        //sign me some jwt
        //console.log("kill me")
        const token = genToken(isUser)
        console.log(token)
        response.status(200).json({token})
      } else{
        //console.log("yay")
        return response.json({success: false, message: 'passwords dont match idiot'});
      }
    })
  }
})

// router.route("/").options(
//   passport.authenticate('local', 
//     {
//       successRedirect: 'http://localhost:3000/map',
//       failureRedirect: 'http://localhost:3000/feed',
//       failureFlash: true 
//     }
//   )
// )

// router.route("/").post((req, res) => {
//     console.log('POST req received for login')
//     attemptLogin(req, res);
// });

// router.route("/login").post((req, res) => {

//   try {
//     console.log('POST req received for login')
//     attemptLogin(req, res); 
//   }
//   catch (err){
//     res.send(err)
//   }
    
// })

module.exports = router;
