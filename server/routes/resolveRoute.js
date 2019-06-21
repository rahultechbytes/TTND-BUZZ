const express = require('express');
const router = express.Router();
const resolveOperation = require('../dB/services/resolveOperations');
const verifyToken = require('../middlewares/jwtVerification');

router.get('/', verifyToken, (req, res) => {
    resolveOperation.fetchComplaint(req.user.emailId)
        .then(data => { res.send(data) })
        .catch(err => { res.send(err) })
});


module.exports = router;