const express = require('express');
const router = require("express").Router(); // Router object to define a route
const mockaroo = require("mockaroo")
const axios = require("axios")
const app = express();
require("dotenv").config({ silent: true })
const multer = require('multer');

// Initiate Mongoose
const mongoose = require("mongoose")
const postModel = require("../models/postModel")
const Post = postModel['postStuff']
const Restaurant = require("../models/restaurantModel")
const User = require("../models/userModel")
const path = require('path')
const { body, validationResult, expressValidator} = require('express-validator');
console.log(__dirname);
// cb with destination...?
const Storage = multer.diskStorage({
  //destination: "../uploads/",
   destination: function (req, file, callback) {
       console.log(__dirname);
        callback(null,  '../uploads/');
    },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now()+path.extname(file.originalname));
  }
});

const upload = multer({ storage: Storage })

const getInfo = async (restaurantname, username) => {

  try {
    // Query Restaurant from DB
    let restaurant = await Restaurant.findOne({ name: restaurantname })
  
    // Query User from DB
    let user = await User.findOne({ username: username })

    //console.log('RESTAURANT INSIDE FUNCTION', restaurant)
    //console.log('USER INSIDE FUNCTION', user)

    return {'restaurant': restaurant, 'user':user}

  } catch (err) {
    //console.log("========RESTAURANT and USERNAME MONGODB fetch failed")
    //console.log(err)
    return err
  }
} 



const posting =  async (req, res)  => {
  //console.log("POST req for postfeed received")

    // Upload file
    // upload.single('file')
    console.log(__dirname);

    // check('file')
    //   .custom((value, {req}) => {
    //       if(req.file.mimetype === 'application/png'
    //       ){
    //           return '.png'; 
    //       }
    //       else if(req.file.mimetype === 'application/jpeg'
    //       ){
    //           return '.jpeg'; 
    //       }
    //       else if(req.file.mimetype === 'application/jpg'
    //       ){
    //           return '.jpg'; 
    //       }
    //       else{
    //           return false; // return "falsy" value to indicate invalid data
    //       }
    //   })
      // .withMessage('Please only submit valid photos.')
    //console.log('REQUEST IS ', req)

    let obj = {
        'title': req.body.title,
        'author': {type: mongoose.Types.ObjectId, ref: 'User'}, // id or username from user schema
        'content': req.body.caption,
        'parentRestaurant': [], // get id from restaruant schema, arrays of mongoose ID objects
        'imageURL': req.file.destination + req.file.filename
    }

    // Later to be replaced by req.body.restaurantName and req.body.username
    const RESTAURANTNAME = 'Hi-Collar'
    const USERNAME = 'lkg282'

    // Check for user login
    if (false) {

    }
    // if (obj.author == null || obj.author == ""){
    //     res.redirect(url.format({
    //         pathname: "http://localhost:3000/register"
    //     }));
    // }
    else {
        // Instantiate post model
        let new_post = new Post(obj)

        let models = await getInfo(RESTAURANTNAME, USERNAME)
        //console.log('DICTIONARY IS ', models)
        const user = models['user']
        const restaurant = models['restaurant']

       // console.log('======= USER IS ',user)
        //console.log('======= RESTAURANT IS ',restaurant)
          
        // Add Restaurant & User data
        new_post.author = user['_id']
        new_post.parentRestaurant.push(restaurant['_id'])

        //console.log("new_post")
        //console.log(new_post)
        try {
          await new_post.save(err => { if(err) console.log(err) });
        //   res.send('postFeed works') 
          res.redirect("/search");
        } catch (err) {
          //console.log("=======MONGODB SAVE FOR POST FAILED")
         // console.log(err)
         // console.log("==================")
       }
        
    }   
}

// Image Get Routes
router.get('/postfeed/:filename', (req, res) => {
    res.json('/postfeed/:filename');
});

console.log("I m here")
router.route("/").post( upload.single('images'), async (req, res) => {
    console.log('POST request received at postRoute')
    posting(req, res);
});

router.route("/").get((req, res) => {
    posting(req, res)
    res.send('GET REQ WORKS')
})
module.exports = router;