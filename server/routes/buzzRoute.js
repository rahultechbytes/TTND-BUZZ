const express = require('express');
const router = express.Router();
const buzzOperations = require('../dB/services/buzzOperations');
const UserFeeds = require('../dB/model/buzzSchema');
const upload = require('../middlewares/multer');
const cloudinary = require('../config/cloudinary');

router.post('/feeds', upload.single('image'), async (req, res) => {
    const formData = req.body;
    var imageFile = '';
    console.log("formData: ", formData);
    if (req.file) {
        await cloudinary.uploader.upload(req.file.path, (error, result) => {
            imageFile = result.secure_url;
        });
    }
    const buzzData = new UserFeeds({
        description: formData.userPost,
        category: formData.category,
        attachment: imageFile
    });
    buzzOperations.createFeed(buzzData).then(data => {
        console.log("buzz Data: ", data);
        res.send(data);
    }).catch(err => {
        console.log("buzz error: ", err);
        res.status(404).send(err);
    });
    // res.send(buzzData);
});

module.exports = router;