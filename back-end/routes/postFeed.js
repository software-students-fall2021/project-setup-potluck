
const router = require("express").Router(); // Router object to define a route
const mockaroo = require("mockaroo")
const axios = require("axios")
const postfeed = async (req, res) => {
    try {
        console.log("AXIOS RESULTS")
        const response = await axios('https://api.mockaroo.com/api/6876d7a0?count=1000&key=f9dbb980')
        const data = response.data // Extract data from mockaroo

        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

router.route("/").get((req, res) => {
    postfeed(req, res);
});
console.log("fine here")
module.exports = router


// app.post('/upload-photos', async (req, res) => {
//     try {
//         if(!req.files) {
//             res.send({
//                 status: false,
//                 message: 'No file uploaded'
//             });
//         } else {
//             let data = []; 
    
//             //loop all files
//             _.forEach(_.keysIn(req.files.photos), (key) => {
//                 let photo = req.files.photos[key];
                
//                 //move photo to uploads directory
//                 photo.mv('./uploads/' + photo.name);

//                 //push file details
//                 data.push({
//                     name: photo.name,
//                     mimetype: photo.mimetype,
//                     size: photo.size
//                 });
//             });
    
//             //return response
//             res.send({
//                 status: true,
//                 message: 'Files are uploaded',
//                 data: data
//             });
//         }
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });