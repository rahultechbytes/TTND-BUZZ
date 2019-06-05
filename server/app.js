const express = require('express');
const app = express();
require('dotenv').config();
const userRoute = require('./routes/userRoute');
const bodyParser = require('body-parser');
const passport = require('passport');
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./auth/google-auth');

app.use('/',userRoute);

app.listen(PORT,()=>{
    console.log("server running at Port:",PORT);
});