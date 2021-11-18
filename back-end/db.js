const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const URLSlugs = require('mongoose-url-slugs');


const Post = new mongoose.Schema({
    //not sure if unique needs to be here
    title:{type: String, unique: true},
    author:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    content:{type: String},
    parentRestaurant: [{type:mongoose.Schema.Types.ObjectId, ref:'Restuarant'}],
    imgs:[{type: String}]
})