const express = require('express');
const router = express.Router();
const resolveOperation = require('../dB/services/resolveOperations');
const verifyToken = require('../middlewares/jwtVerification');

router.get('/', verifyToken, (req, res) => {
    resolveOperation.fetchComplaint(req.user.emailId)
        .then(data => { res.send(data) })
        .catch(err => { res.send(err) })
});

router.patch('/', verifyToken, (req,res)=>{
    console.log("req.body.status", req.body.status);
    console.log("req.body.issueId", req.body.issueId);
    resolveOperation.updateComplaint(req.body.status, req.body.issueId).then((data)=>{
        console.log("in resolve route", data);
        res.send(data);
    }).catch((err)=>{
        console.log("error is: ",err);
    })
})


module.exports = router;