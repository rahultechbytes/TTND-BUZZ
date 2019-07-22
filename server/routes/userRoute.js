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

        jwt.sign(UserDetails.toJSON(), process.env.SECRET ,{ expiresIn: '10h' },(err,token)=>{
            if(err){
                res.status(440).send({errtype:'session timeout'});
            }
            else{
                res.redirect(`http://localhost:3000/token?q=${token}`);
            }
        });
     }
);

module.exports = router;