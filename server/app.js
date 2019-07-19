const express = require('express');
const app = express();
require('dotenv').config();
require('./dB/utils/connection');                          //db connection establishment
const bodyParser = require('body-parser');
const passport = require('passport');
const PORT = process.env.PORT;
require('./config/cloudinary');
const cors = require('cors');
const routes = require('./routes/routeManager');


app.use(bodyParser.urlencoded({ extended: false }));            //bodyParser
app.use(bodyParser.json());

app.use(passport.initialize());                         //passport
require('./auth/google-auth');

app.use(cors());                    //cors


app.use('/', routes);               //Routes

app.listen(PORT, () => {
    console.log("server running at Port:", PORT);
});