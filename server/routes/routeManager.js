const express = require('express');
const router = express.Router();

const userRoute = require('./userRoute');
const userProfileRoute = require('./profileRoute');
const buzzRoute = require('./buzzRoute');
const complaintRoute = require('./complaintRoute');
const resolveRoute = require('./resolveRoute');

router.use('/', userRoute);                 // authentication routes for user
router.use('/user', userProfileRoute)       // user profile route
router.use('/dashboard/buzz', buzzRoute);   // buzz routes for activity feeds
router.use('/dashboard/complaint', complaintRoute);    //complaints route for  user complaints
router.use('/dashboard/resolve', resolveRoute);  // resolve route added


module.exports = router;