const express = require('express');
const router = express.Router();
const nanoId = require('nanoid');
const cloudinary = require('../config/cloudinary');
const upload = require('../middlewares/multer');
const complaintOperations = require('../dB/services/complaintOperations');
const Complaint = require('../dB/model/complaintSchema');
const findAdmin = require('../dB/utils/findAdmin');
const verifyToken = require('../middlewares/jwtVerification');

router.post('/', verifyToken, upload.single('attachment'), async (req, res) => {
    const formData = req.body;
    // console.log("req.user: ",req.user);
    var imageFile = '';
    if (req.file) {
        await cloudinary.uploader.upload(req.file.path, (error, result) => {
            imageFile = result.secure_url;
        });
    }
    const assignedToAdmin = await findAdmin();       // finding admin
    console.log("asignedTo: ", assignedToAdmin);

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
        res.send({ message: "Complaint Saved", data });
    }).catch(err => {
        console.log("complaint error: ", err);
        res.status(404).send(err);
    });
});

router.get('/:skip', verifyToken, (req, res) => {
    const skip = parseInt(req.params.skip);
    complaintOperations.fetchComplaint(req.user.emailId, skip).then(success => {
        res.send(success);
    }).catch(err => {
        res.status(404).send(err);
    })
});

module.exports = router;
