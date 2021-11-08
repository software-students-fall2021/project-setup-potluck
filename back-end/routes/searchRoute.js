

const router = require("express").Router(); // Router object to define a route
const mockaroo = require("mockaroo")

let client = new mockaroo.Client({
    apiKey: "329a3210"
})


const getSearch = async (req, res) =>{
    try{
        // console.log("h1")
        //  const mockData = await fetch("https://my.api.mockaroo.com/post.json?key=329a3210").then(console.log("hji"))
        // console.log(mockData);

        // res.json(mockData);
        // res.send("hi")
        //generates fake data using mockaroo and sends out json response when this route is called
        client.generate({
            count: 10,
            schema: "post"
        }).then(function(records){
            res.json(records)
        })
    }catch(error){res.send(error)}
}


router.route("/").get((req, res) => {
    getSearch(req, res);
});

module.exports = router