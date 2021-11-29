const express = require('express');
const router = require("express").Router(); // Router object to define a route
const mockaroo = require("mockaroo")
const axios = require("axios")
const postModel = require("../models/postModel")
const app = express();
require("dotenv").config({ silent: true })
const multer = require('multer');
  


var Storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now()+path.extname(file.originalname));
  }
});
var upload = multer({ storage: Storage }).single('file')
  
app.post('/postfeed', upload, (req, res) => {
  
    var obj = {
        title: req.body.title,
        author: req.body.author,
        
        content: req.body.caption,

        restaurant: req.body.parentRestaurant,
        imageURL: req.body.imageURL,
        imgs: {
            data: fs.readFile(path.join(__dirname + '/uploads/' + req.file.filename)),
            // contentType: 'image/png'
        }
    }
    const new_post = new postModel({obj})
    console.log("new_posI m t")
    new_post.save(err => { if(err) console.log('Unable to upload') });
    
    res.redirect(url.format({
        pathname:"http://localhost:3000/feed"
    }));
});
module.exports = app;