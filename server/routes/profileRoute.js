const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/jwtVerification');
const userOperations = require('../dB/services/userOperations');

router.get('/', verifyToken, (req, res) => {
    userOperations.findOne(req.user.googleId).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(400).send(err);
    });
})

module.exports = router;