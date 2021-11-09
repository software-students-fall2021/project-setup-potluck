const router = require("express").Router();
const mockaroo = require("mockaroo")

let user = new mockaroo.Client({
    apiKey: "cc6842f0"
})


const getUser = async (req, res)=>{
    try{
    //Schema from mockaroo includes following fields for user: id (unique), username, first_name, last_name, email, gender, profilePic
        user.generate({
            count: 1,
            schema: "Users"
        }).then(function(userData){
            res.json(userData)
        })
    } catch(error) {
        res.send(error)
    }
    //take this mockaroo schema and query the mockaroo api for some data, and send it as a json (res.json()) to the frontend!
}
router.route("/").get((req, res) => {
    getUser(req, res);
});


module.exports = router 