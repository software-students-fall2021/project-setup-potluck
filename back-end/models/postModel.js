const mongoose = require('mongoose');
//const passportLocalMongoose = require('passport-local-mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const URLSlugs = require('mongoose-url-slugs');


const Post = new mongoose.Schema({
    //not sure if unique needs to be here
    title:{type: String, unique: true},
    author:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    content:{type: String},
    parentRestaurant: [{type:mongoose.Schema.Types.ObjectId, ref:'Restuarant'}],
    url:{type: String},
    //subject to change to an image url
    imgs:[{type: String}],
    tags:[{type : String}]
})

// const postSchema = {
//     //schema configuration
//     title: "postSchema v1",
//     type: "object",
//     required: ["title", "imageURL", "url", "author", "tags", "objectID"],
//     //the schema itself
//     properties: {
//       title: { type: "string" },
//       imageURL: { type: "string" },
//       url: { type: "string" },
//       author: { type: "string" },
//       tags: { type: "number" },
//       object: { type: "number" },
//     },
//   }
  

Post.plugin(beautifyUnique)

const postModel = mongoose.model("Post", Post)

module.exports= postModel 

