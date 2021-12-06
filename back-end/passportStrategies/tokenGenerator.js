const jwt = require('jsonwebtoken')
require("./passport");
const User = require("../models/userModel")


const genToken = user =>{
    return jwt.sign({
        iss: 'team_Potluck',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() +1)

    }, 'secret')
}


module.exports = genToken;