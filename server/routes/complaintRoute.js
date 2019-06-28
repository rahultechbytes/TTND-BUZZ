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
    var imageFile = '';
    if (req.file) {
        await cloudinary.uploader.upload(req.file.path, (error, result) => {
            imageFile = result.secure_url;
        });
    }
    const assignedToAdmin = await findAdmin(req.body.department);       // finding admin

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
        mailer({
            email: data.emailId,
            subject: "Your Complain is registered",
            name: data.name,
            issueId: data.issueId,
            department: data.department,
            title: data.title,
            concern: data.concern,
            image: data.attachment,
            adminEmail: data.assignedTo.emailId,
            AssignedTo: data.assignedTo.username
        });
        mailer({
            email: data.assignedTo.emailId,
            subject: "Complain is assigned to you",
            name: data.assignedTo.username,
            issueId: data.issueId,
            department: data.department,
            title: data.title,
            concern: data.concern,
            image: data.attachment,
            AssignedTo: "null",
            adminEmail: "null"
        });
        res.send({ message: "Complaint Saved", data });
    }).catch(err => {
        res.status(400).send(err);
    });
});

router.get('/', verifyToken, (req, res) => {
    complaintOperations.fetchComplaint(req.user.emailId).then(success => {
        res.send(success);
    }).catch(err => {
        res.status(400).send(err);
    })
});

module.exports = router;
