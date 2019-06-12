const express = require('express');
const app = express();
require('dotenv').config();
const userRoute = require('./routes/userRoute');
const buzzRoute = require('./routes/buzzRoute');
const bodyParser = require('body-parser');
const passport = require('passport');
const PORT = process.env.PORT;
require('./config/cloudinary');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./auth/google-auth');

app.use('/',userRoute);                 // authentication routes for user
app.use('/dashboard/buzz',buzzRoute);   // buzz routes for activity feeds

app.listen(PORT,()=>{
    console.log("server running at Port:",PORT);
});