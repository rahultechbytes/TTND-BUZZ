const express = require('express');
const router = express.Router();
const resolveOperation = require('../dB/services/resolveOperations');
const verifyToken = require('../middlewares/jwtVerification');
const mailer = require('../config/nodeMailer');

router.get('/', verifyToken, (req, res) => {
    const filter = req.query.filter;
    resolveOperation.fetchComplaint(req.user.emailId, filter).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(400).send(err);
    })
});

router.patch('/', verifyToken, (req, res) => {
    resolveOperation.updateComplaint(req.body.status, req.body.issueId).then((data) => {
        if (data.status === "Resolved") {
            mailer({
                email: data.emailId,
                subject: "Complain Resolved",
                name: data.name,
                issueId: data.issueId,
                department: data.department,
                title: data.title,
                concern: data.concern,
                adminEmail: data.assignedTo.emailId,
                AssignedTo: data.assignedTo.username
            });
        }
        res.send(data);
    }).catch((err) => {
        res.status(400).send(err);
    })
})


module.exports = router;