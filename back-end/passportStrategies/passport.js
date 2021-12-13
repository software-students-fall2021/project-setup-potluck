const User = require("../models/userModel")
const passport = require('passport')
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    var opts = {}
    var cookieExtractor = function(req) {
        var token = null;
        if (req && req.cookies) token = req.cookies['jwt'];
        return token;
      };
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey ='secret';
    
    //should add these later
    // opts.issuer = 'accounts.test.net'
    // opts.audience = 'potluck.net';
    //maybe rewrite with promises later
    const myStrat = new JwtStrategy(opts,  async function(jwt_payload, done){
        console.log(jwt_payload.sub)
        

        console.log(await User.findById(jwt_payload.sub))

        const myUser =
        //passport is stupid and doesnt work with findOne for some reason lmao
        User.findById(jwt_payload.sub, function(err,user){
            if(err){
                console.log("YAU")
                return done(err, false)
            }
            if(user){
                console.log(user)
                return done(null, user)
            }
            else{
                return done(null, false)
                //new account registration here?
            }
        })
    })

    module.exports = myStrat


    // module.exports = function(passport){
    //     var opts = {}
    //     opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    //     opts.secretOrKey ='secret';
    //     console.log("OPTS"+ opts)
    //     passport.use(new JwtStrategy(opts, function(jwt_payload, done){
    //         console.log("WOOO")
    //         User.findOne({id: jwt_payload.id}, function(err,user){
    //             if(err){
    //                 console.log("YAU")
    //                 return done(err, false)
    //             }
    //             if(user){
    //                 return done(null, user)
    //             }
    //             else{
    //                 return done(null, false)
    //                 //new account registration here?
    //             }
    //         })
    //     }))
    // }
        
//     var cookieExtractor = function(req) {
//         var token = null;
//         if (req && req.cookies) token = req.cookies['jwt'];
//         return token;
//       };
//     opts.jwtFromRequest =cookieExtractor()
//     opts.secretOrKey ='secret';
//    // opts.secretOrKey = config.secret;
//     //should add these later
//    // opts.issuer = 'accounts.test.net'
//     //opts.audience = 'potluck.net';
//    // maybe rewrite with promises later
//     passport.use(new JwtStrategy(opts, function(jwt_payload, done){
//         User.findOne({id: jwt_payload.id}, function(err,user){
//             if(err){
//                 return done(err, false)
//             }
//             if(user){
//                 return done(null, user)
//             }
//             else{
//                 return done(null, false)
//                 //new account registration here?
//             }
//         })
//     }))
    
//     // module.exports = function(passport) {  
//     //     var opts = {};
//     //     opts.jwtFromRequest = cookieExtractor; // check token in cookie
//     //     opts.secretOrKey = config.secret;
//     //     //opts.secretOrKey ='secret';
//     //     passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     //       User.findOne({id: jwt_payload.id}, function(err, user) {
//     //         if (err) {
//     //           return done(err, false);
//     //         }
//     //         if (user) {
//     //           done(null, user);
//     //         } else {
//     //           done(null, false);
//     //         }
//     //       });
//     //     }));
//     //   };