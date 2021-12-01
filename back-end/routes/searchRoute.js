

const router = require("express").Router(); // Router object to define a route
const mockaroo = require("mockaroo")
const mongoose = require("mongoose")
const db = require('../models/postModel')
const Post = db.postStuff;
const multer = require('multer');
const { serializeUser } = require("passport");
// const db2 = require("../models/restaurantModel");
const RestaurantModel = require("../models/restaurantModel");
const User = require("../models/userModel")
const base64Img = require('base64-img')


let client = new mockaroo.Client({
    apiKey: "329a3210"
})
// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, path.join(__dirname + '/filestorage/images/'));
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '.jpg') //Appending .jpg
//     }

// });
// const upload = multer({ storage });


const getSearch = async (req, res) =>{
    try{
         console.log("hi")
        // console.log("h1")
        //  const mockData = await fetch("https://my.api.mockaroo.com/post.json?key=329a3210").then(console.log("hji"))
        // console.log(mockData);

        // res.json(mockData);
        // res.send("hi")
       // generates fake data using mockaroo and sends out json response when this route is called
        // client.generate({
        //     count: 10,
        //     schema: "post"
        // }).then(function(records){
        //     res.json(records)
        // })
        // Post.Find({}, function(err, posts){
        //     var postMap= {}

        //     posts.foreach(function(post){
        //         userMap[user._id] = user
        //     })
        //     res.json(postMap)

        // })

        // const Post = new mongoose.Schema({
        //     //not sure if unique needs to be here
        //     title:{type: String, require:true},
        //     author:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
        //     imageURL: {type: "string"},
        //     url:{type: "string"},
        //     content:{type: String},
        //     parentRestaurant: [{type:mongoose.Schema.Types.ObjectId, ref:'Restuarant'}],
        //     tags: [{type : String}],
        //     //can hold multiple images if neccessary instead of just one
        //     //imgs:[{type: String}]
        // })
        
       // const user = await User.findOne({"_id": "619bf8c3dd2ce058b210c096"})
        //console.log(user)
        //inferior callback version
       // const restaurant = await RestaurantModel.findOne({"_id": "619acccc58529672c5748621" })
       // console.log(restaurant)
        // const post = await Post.findOne({"title": "I like OBAO"}).populate("author").populate("parentRestaurant").exec((err, posts)=>
        // {   //this would come out of post
        //     //console.log(posts)
        //     //console.log(posts.imageURL)
        //     const src = base64Img.base64(posts.imageURL, function(err, data) { console.log(data)})
        
        // })
        
     
       const post= await Post.findOne({"title": "GUCCIGUCCIGUCCI"}).populate("author").populate("parentRestaurant")
      // console.log(post.imageURL)
        //const mySrc = "nothing";
        //for some reason async doesnt work here will investigate later
        //const src = base64Img.base64(post.imageURL, function(err, data) { console.log(data); mySrc = data})
        //const src = base64Img.base64Sync(post.imageURL)
        //console.log(src)
        //onsole.log(post)
        const myPosts = await Post.find({}).populate("author").populate("parentRestaurant")
        console.log( myPosts)
        const allPosts = myPosts.map((element, iterator)=>
        
            {return(
                {
                    // objectId: iterator ,
                    title:element.title,
                author: element.author,
                imageURL: base64Img.base64Sync(element.imageURL),
                url: element.url,
                content: element.content,
                parentRestaurant: element.parentRestaurant,
                tags: element.tags
                }
                
            )}
        )

        // console.log(allPosts[0])


    
                res.json(allPosts)
        
        //console.log(mySrc)

       // console.log(myImg)
       // const restaurant =
         //console.log(post + "hello")
        // res.send(post)
    }catch(error){res.send(error)}
}



router.route("/").get((req, res) => {
    getSearch(req, res);
});
// router.route("/").post( upload.single('photo'),async (req, res)=>{
//     try{
//       if(req.isAuthenticated() && req.user.username == req.params.user){
//         console.log(req.user)
//         const dbUser = await User.findOne({"username": req.user.username})
//         console.log(req.file)
//         req.file.fieldname =req.file.originalname;
//         let nPost = new Post({"title": req.body.title, "author": [], "imageURL": req.file.destination + req.file.filename,  "content": req.file.content, "parentRestaurant":[], "tags": req.body.tags  })

//       }
//     }catch(error){res.send(error)};
// })

module.exports = router