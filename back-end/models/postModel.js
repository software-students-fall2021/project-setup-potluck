const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const URLSlugs = require('mongoose-url-slugs');


const Post = new mongoose.Schema({
    //not sure if unique needs to be here
    title:{type: String, require:true},
    author:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    imageURL: {type: "string"},
    url:{type: "string"},
    content:{type: String},
    parentRestaurant: [{type:mongoose.Schema.Types.ObjectId, ref:'Restaurant'}],
    tags: [{type : String}],
    //can hold multiple images if neccessary instead of just one
    // imgs:[{type: String}]
})


//Post.plugin(beautifyUnique)

const postModel = mongoose.model("Post", Post)

module.exports= {"postStuff" : postModel}

