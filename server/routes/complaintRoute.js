const express = require('express');
const router = express.Router();
const nanoId = require('nanoid');
const cloudinary = require('../config/cloudinary');
const upload = require('../middlewares/multer');
const complaintOperations = require('../dB/services/complaintOperations');
const Complaint = require('../dB/model/complaintSchema');
const findAdmin = require('../dB/utils/findAdmin');
const verifyToken = require('../middlewares/jwtVerification');
const mailer = require('../config/nodeMailer');

router.post('/', verifyToken, upload.single('attachment'), async (req, res) => {
    const formData = req.body;
    // console.log("req.user: ",req.user);
    var imageFile = '';
    if (req.file) {
        await cloudinary.uploader.upload(req.file.path, (error, result) => {
            imageFile = result.secure_url;
        });
    }
    const assignedToAdmin = await findAdmin(req.body.department);       // finding admin
    console.log("asignedTo: ", assignedToAdmin[0].username);

    const id = nanoId(10)           //random id generator for IssueId

    const complaintData = new Complaint({
        department: formData.department,
        title: formData.title,
        concern: formData.concern,
        attachment: imageFile,
        emailId: req.user.emailId,
        name: req.user.username,
        issueId: id,
        assignedTo: {
            username: assignedToAdmin[0].username,
            emailId: assignedToAdmin[0].emailId
        }
    });
    complaintOperations.createComplaint(complaintData).then(data => {
        // console.log("$$$$$$$$$$$$$$4", data);
        mailer({
            email: data.emailId,
            name: data.name,
            concern: data.concern,
            subject: "Your Complain is registered",
            text: "your complain will be resolve soon",
        });
        mailer({
            email: data.assignedTo.emailId,
            name: data.name,
            concern: data.concern,
            title: data.title,
            subject: "Complain is assigned to you",
        });
        res.send({ message: "Complaint Saved", data });
    }).catch(err => {
        console.log("complaint error: ", err);
        res.status(404).send(err);
    });
});

router.get('/', verifyToken, (req, res) => {
    complaintOperations.fetchComplaint(req.user.emailId).then(success => {
        res.send(success);
    }).catch(err => {
        res.status(404).send(err);
    })
});

module.exports = router;
