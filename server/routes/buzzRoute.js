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

// router.post('/like', verifyToken, (req, res) => {
//     // const fetchBuzz =await  buzzOperations.getBuzzById(req.body._id);
//     // let emailId = req.user.emailId;
//     // const {Like} = fetchBuzz;
//     // var status=false;
//     // var isEmailExist = Like.map((item)=>{
//     //     console.log("item.userId",item.userId);
//     //     console.log("emailId",emailId);
//     //     if(item.userId != emailId){
//     //         return true;
//     //     }
//     // })  
//     // if(isEmailExist){
//     //     status=true;
//     // }


//     // console.log('isemailexist',isEmailExist)
//     console.log("status: ",req.body.status);
//     buzzOperations.likeBuzz(
//         req.body._id,
//         req.user.emailId,
//         req.body.status
//     ).then(result => {
//         console.log("result is",result)
//         res.send(result);
//     }).catch(err => {
//         res.send(err);
//     })
// });

// router.post('/dislike', verifyToken, (req, res) => {
//     buzzOperations.dislikeBuzz(
//         req.body._id,
//         req.user.emailId,
//         req.body.status
//     ).then(result => {
//         res.send(result);
//     }).catch(err => {
//         res.send(err);
//     })
// });

module.exports = router;

