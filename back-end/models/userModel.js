const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//Create user schema for all necessary information
const User = new Schema({

    email: {type: String, unique: true, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    image: String,
    posts: [{type:mongoose.Schema.Types.ObjectId, ref:'Post'}],
    password: {type: String, unique: true, required: true}

});

//Include plugin for passportLocalMongoose
User.plugin(passportLocalMongoose);

const Users = mongoose.model('User', User);

//Create export for the user schema
module.exports = Users