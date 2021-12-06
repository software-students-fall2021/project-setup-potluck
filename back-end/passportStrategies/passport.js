const User = require("../models/userModel")
const passport = require('passport')
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey ='secret';
    //should add these later
    // opts.issuer = 'accounts.test.net'
    // opts.audience = 'potluck.net';
    //maybe rewrite with promises later
    passport.use(new JwtStrategy(opts, function(jwt_payload, done){
        User.findOne({id: jwt_payload.id}, function(err,user){
            if(err){
                return done(err, false)
            }
            if(user){
                return done(null, user)
            }
            else{
                return done(null, false)
                //new account registration here?
            }
        })
    }))
