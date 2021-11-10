const router = require("express").Router(); // Router object to define a route
const axios = require("axios");

//For jin, if you follow these comments you should be in a good spot!

const getUsers = async (req, res)=>{
    try{
        const response = await axios("https://my.api.mockaroo.com/users/123.json?key=cc6842f0")
        const data = response.data
        res.send(data)

    }catch(error){
        res.send(error);
    }
}

const getUser = async (req, res, id)=>{
    try{
        const response = await axios("https://my.api.mockaroo.com/users/123.json?key=cc6842f0")
        const data = response.data
        const user = data[id];
        //FILTER DATA - find "id" and respond with respective data fields
        res.send(user)
    }catch(error){
        res.send(error);
    }

}

//finally remember to ask for help if you get stuck! 
router.route("/").get((req, res) => {
    getUsers(req, res);
});

router.route("/:id").get((req, res) => {
    const id = req.params.id
    getUser(req, res, id)
});



module.exports = router