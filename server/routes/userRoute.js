const express = require("express");
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


router.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile','email']})
);

router.get(
    '/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/', session: false }),
    function(req, res) {
        let UserDetails = req.user;

        console.log("userDetails", UserDetails);
        jwt.sign(UserDetails.toJSON(), process.env.SECRET ,{ expiresIn: '10h' },(err,token)=>{
            console.log("token is ====>",token);
            if(err){
                console.log("err:",err);
            }
            else{
                console.log("token:",token);
                res.redirect(`http://localhost:3000/token?q=${token}`);
            }
        });
        // res.send(UserDetails)
     }
);

module.exports = router;