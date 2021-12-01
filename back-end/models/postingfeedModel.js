var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PostFeed = new Schema({
    name: {String, required: true},
    title: {String},
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
  
module.exports = new mongoose.model('PostFeed', PostFeed);