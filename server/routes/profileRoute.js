const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/jwtVerification');
const userOperations = require('../dB/services/userOperations');

router.get('/', verifyToken, (req, res) => {
    // console.log("req.user.googleId:",req.user.googleId)
    userOperations.findOne(req.user.googleId).then((data) => {
        // console.log("profile: ",res);
        res.send(data)
    });
})

module.exports = router;