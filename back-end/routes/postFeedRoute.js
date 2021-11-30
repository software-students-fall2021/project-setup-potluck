const express = require('express');
const router = require("express").Router(); // Router object to define a route
const mockaroo = require("mockaroo")
const axios = require("axios")
const postModel = require("../models/postModel")
const app = express();
require("dotenv").config({ silent: true })
const multer = require('multer');
  
const { body, validationResult, expressValidator} = require('express-validator');

// cb with destination...?
var Storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now()+path.extname(file.originalname));
  }
});
var upload = multer({ storage: Storage })

const posting = app.post('/postfeed', upload.single('file'), (req, res) => {
    console.log("heelo")
    

    check('file')
        .custom((value, {req}) => {
                if(req.file.mimetype === 'application/png'
                ){
                    return '.png'; 
                }
                else if(req.file.mimetype === 'application/jpeg'
                ){
                    return '.jpeg'; 
                }
                else if(req.file.mimetype === 'application/jpg'
                ){
                    return '.jpg'; 
                }
                
                else{
                    return false; // return "falsy" value to indicate invalid data
                }
            })
        .withMessage('Please only submit valid photos.')

    var obj = {
        title: req.body.title,
        author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // id or username from user schema
        content: req.body.caption,
        parentRestaurant: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'}, // get id from restaruant schema, arrays of mongoose ID objects
        imageURL: req.file.filename
    }
    if (obj.author == null || obj.author == ""){
        res.redirect(url.format({
            pathname: "http://localhost:3000/register"
        }));
    }
    else {
        const new_post = new postModel({obj})
        console.log("new_post")
        new_post.save(err => { if(err) console.log('Unable to upload') });
        
        res.redirect(url.format({
            pathname:"http://localhost:3000/feed"
        }));
    }
    
});

// Image Get Routes
app.get('/postfeed/:filename', (req, res) => {
    res.json('/postfeed/:filename');
});

console.log("I m here")
router.route("/").post((req, res) => {
    posting(req, res);
});
module.exports = router;