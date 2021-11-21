const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//Create user schema for all necessary information
const User = new Schema({

    email: {type: String, unique: true, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    image: String,
    posts: [{type:mongoose.Schema.Types.ObjectId, ref:'Post'}]

});

//Include plugin for passportLocalMongoose
User.plugin(passportLocalMongoose);

//Create export for the user schema
module.exports = mongoose.model('User', User);