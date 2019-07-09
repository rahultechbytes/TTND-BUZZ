const express = require('express');
const router = express.Router();
const buzzOperations = require('../dB/services/buzzOperations');
const verifyToken = require('../middlewares/jwtVerification');
const UserFeeds = require('../dB/model/buzzSchema');
const upload = require('../middlewares/multer');
const cloudinary = require('../config/cloudinary');

router.post('/', verifyToken, upload.single('attachment'), async (req, res) => {
    const formData = req.body;
    var imageFile = '';
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
        attachment: imageFile,
        thumbNail: req.user.thumbnail
    });
    buzzOperations.createFeed(buzzData).then(data => {
        res.send({ message: "Data Saved", data });
    }).catch(err => {
        res.status(400).send(err);
    });
});

router.get('/', verifyToken, (req, res) => {
    const skip = parseInt(req.query.offset);
    const filter = req.query.filter
    let emailId = req.user.emailId;
    buzzOperations.fetchFeed(skip,filter,emailId).then(success => {
        res.send(success);
    }).catch(err => {
        res.status(400).send(err);
    })
});

router.patch('/like', verifyToken, async (req, res) => {
    const fetchBuzz = await buzzOperations.getBuzzById(req.body.buzzId);
    let emailId = req.user.emailId;
    const { Like } = fetchBuzz;

    status = Like.filter((item) => { return item.userId === emailId }).length === 0 ? true : false;

    buzzOperations.likeBuzz(
        req.body.buzzId,
        req.user.emailId,
        status
    ).then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).send(err);
    })
});

router.patch('/dislike', verifyToken, async (req, res) => {
    const fetchBuzz = await buzzOperations.getBuzzById(req.body.buzzId);
    let emailId = req.user.emailId;
    const { dislike } = fetchBuzz;

    status = dislike.filter((item) => { return item.userId === emailId }).length === 0 ? true : false;


    buzzOperations.dislikeBuzz(
        req.body.buzzId,
        req.user.emailId,
        status
    ).then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).send(err);
    })
});

router.delete('/:buzzId', verifyToken, (req, res) => {
    const id = req.params.buzzId;
    buzzOperations.deletePost(id).then((data) => {
        res.status(200).send(data.id);
    }).catch(err => {
        res.status(400).send(err);
    })
})

module.exports = router;

