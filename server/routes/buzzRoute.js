const express = require('express');
const router = express.Router();
const buzzOperations = require('../dB/services/buzzOperations');
const verifyToken = require('../middlewares/jwtVerification');
const UserFeeds = require('../dB/model/buzzSchema');
const upload = require('../middlewares/multer');
const cloudinary = require('../config/cloudinary');

router.post('/', verifyToken, upload.single('attachment'), async (req, res) => {
    // console.log("req.user", req.user);
    const formData = req.body;
    // console.log("formDATA",formData);
    var imageFile = '';
    // console.log("formData: ", formData);
    if (req.file) {
        await cloudinary.uploader.upload(req.file.path, (error, result) => {
            imageFile = result.secure_url;
        });
    }
    const buzzData = new UserFeeds({
        username: req.user.username,
        emailId: req.user.emailId,
        description: formData.userPost,
        category: formData.category,
        attachment: imageFile
    });
    buzzOperations.createFeed(buzzData).then(data => {
        res.send({ message: "Data Saved", data });
    }).catch(err => {
        console.log("buzz error: ", err);
        res.status(404).send(err);
    });
});

router.get('/', verifyToken, (req, res) => {
    buzzOperations.fetchFeed().then(success => {
        // console.log("buzz feed recieved from db: ", success)
        res.send(success);
    }).catch(err => {
        console.log("error fetching from db: ", err);
        res.status(404).send(err);
    })
});

router.post('/like', verifyToken, async (req, res) => {
    // console.log(`body: ${JSON.stringify(req.body)}`)
    const fetchBuzz = await buzzOperations.getBuzzById(req.body.buzzId);
    let emailId = req.user.emailId;
    const {Like} = fetchBuzz;
    // console.log("Like Array: ",Like);
 
    status = Like.filter((item) => {return item.userId === emailId}).length === 0 ? true : false;

    // console.log("status type: ", typeof (status));
    // console.log("status", status)
    buzzOperations.likeBuzz(
        req.body.buzzId,
        req.user.emailId,
        status
    ).then(result => {
        // console.log("result is", result)
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
});

router.post('/dislike', verifyToken, async (req, res) => {
    const fetchBuzz = await buzzOperations.getBuzzById(req.body.buzzId);
    let emailId = req.user.emailId;
    const {dislike} = fetchBuzz;
    // console.log("dislike Array: ",dislike);

    status = dislike.filter((item) => {return item.userId === emailId}).length === 0 ? true : false;

    // console.log("status type: ", typeof (status));
    // console.log("status: ", status)
    buzzOperations.dislikeBuzz(
        req.body.buzzId,
        req.user.emailId,
        status
    ).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
});

module.exports = router;

