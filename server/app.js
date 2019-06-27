const express = require('express');
const app = express();
require('dotenv').config();
// const userRoute = require('./routes/userRoute');
// const userProfileRoute = require('./routes/profileRoute');
// const buzzRoute = require('./routes/buzzRoute');
// const complaintRoute = require('./routes/complaintRoute');
// const resolveRoute = require('./routes/resolveRoute');
const routes = require('./routes/routeManager');
const bodyParser = require('body-parser');
const passport = require('passport');
const PORT = process.env.PORT;
require('./config/cloudinary');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./auth/google-auth');

app.use(cors());
// app.use('/', userRoute);                 // authentication routes for user
// app.use('/user', userProfileRoute)       // user profile route
// app.use('/dashboard/buzz', buzzRoute);   // buzz routes for activity feeds
// app.use('/dashboard/complaint', complaintRoute);    //complaints route for  user complaints
// app.use('/dashboard/resolve', resolveRoute);  // resolve route added

app.use('/', routes);

app.listen(PORT, () => {
    console.log("server running at Port:", PORT);
});