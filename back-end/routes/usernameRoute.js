const router = require("express").Router(); // Router object to define a route
const mockaroo = require("mockaroo")

//For jin, if you follow these comments you should be in a good spot!

const getUser = async (req, res)=>{
    try{
    //here you should generate some fake user data with mockaroo
        //remember to call req.params.username to get the actual username based on the route
    //the schema for that mockaroo data should be something like this:
        //It will probably change later because passport will take care of usernames and passwords so dont worry if it looks different than what it will eventually be!
        //Will also have a sublist of posts that user has made but dont worry about that for now if you dont have time
    // {
    //    username:"string",
    //    profilePic: "base64ImageURL"
    // }
    //if you can think of other fields feel free to add them

    //take this mockaroo schema and query the mockaroo api for some data, and send it as a json (res.json()) to the frontend!
    }catch(error){
        res.send(error);
    }

}
//finally remember to ask for help if you get stuck! 
router.route("/").get((req, res) => {
    getUser(req, res);
});


module.exports = router