// Routes for "/login"
const router = require("express").Router(); // Router object to define a route

// Function to randomly generate fake restaurant data
// (To be replaced with proxy requests to MongoDB)
const getUsers = (req, res) => {
    try{
        // ----- STORE LIST OF "REGISTERED" USERS - to be deleted -----

        // Create list of users (one for each member of team)
        // Name = member's first name, email = their nyu email, password = their last name
        registeredUsers = [

            {"email": "lkg282@nyu.edu", "password": "Lauren" },
            {"email": "sl6369@nyu.edu", "password": "Seunggun" },
            {"email": "cbw307@nyu.edu", "password": "Christian" },
            {"email": "jhk742@nyu.edu", "password": "Jin" },
            {"email": "mwm356@nyu.edu", "password": "Wajahat" }

        ]

        return registeredUsers
    }
    
    catch(error){
        return error
    }
    
}

// ------------------ ROUTE ENDPOINTS ------------------

// Get all of the registered users
/*router.route("/").get((req, res) => {
    const registeredUsers = getUsers(req, res);
    res.send(registeredUsers)
});/*/

// TEMPORARILY EXCLUDED TO TEST OPTIMAL API CALLS
router.route("/login/:email/:password").get((req, res) => {
    
    // Make call to retrieve all registered users (pre-defined/harcoded)
    const registeredUsers = getUsers(req, res);

    //The email sent by the user to login
    const email = req.params.email

    //The password entered by the user to login
    const password = req.params.password

    //Variable to hold whether the user trying to login entered the correct credentials
    const isValidUser = false

    registeredUsers.forEach(function (arrayItem) {
        if (arrayItem.email === email){
            if (arrayItem.password === password){
                isValidUser = true
            }
        }
    });

    if (isValidUser === true){
        res.send(true)
    }
    else{
        res.send(false)
    }
    
})
  
module.exports = router