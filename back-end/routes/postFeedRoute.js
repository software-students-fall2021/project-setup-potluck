const express = require('express');
const router = require("express").Router(); // Router object to define a route
const mockaroo = require("mockaroo")
const axios = require("axios")
const postModel = require("../models/postModel")
const app = express();
// console.log("fine here")
// const postfeed = async (req, res) => {
//     try {
//         console.log("AXIOS RESULTS")
//         // const response = await axios('https://api.mockaroo.com/api/6876d7a0?count=1000&key=f9dbb980')
//         // const data = response.data // Extract data from mockaroo
//         const data = await postModel.find({}).exec();
//         res.send(data)
//         console.log("fine here 3")
//     } catch (error) {
//         res.send(error)
//     }
// }

// router.route("/").post((req, res) => {
//     postfeed(req, res);
// });
console.log("fine here")

const multer = require('multer');
  
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
const upload = multer({ storage: storage });

app.get('/postfeed', (req, res) => {
    postModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('', { items: items });
        }
    });
});

  
app.post('/postfeed', upload.single('image'), (req, res, next) => {
  
    var obj = {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        restaurant: req.body.parentRestaurant,
        imgs: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            // contentType: 'image/png'
        }
    }
    postModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});
module.exports = app;