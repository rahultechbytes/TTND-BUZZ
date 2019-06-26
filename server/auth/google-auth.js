var passport = require('passport');
const roleData = require('../dB/utils/roles.json');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const userOperations = require('../dB/services/userOperations');
const User = require("../dB/model/userSchema");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,                            //google client id
            clientSecret: process.env.CLIENT_SECRET,                    // google secret key
            callbackURL: "http://localhost:5000/auth/google/callback"
        },
        function (accessToken, refreshToken, profile, done) {
            // roles
            let department;
            let role;
            if (profile._json.email === roleData.role.Hardware.email) {
                department = 'Hardware';
                role = "admin"
            }
            else if (profile._json.email === roleData.role.Infrastructure.email) {
                department = 'Infrastructure',
                role = "admin"
            }
            else if (profile._json.email === roleData.role.Others.email) {
                department = 'Others',
                role = "admin"
            }
            // else{
            //     department = "technology",
            //     role = "user"
            // }

            //roles
            var googleId = profile.id;
            userOperations.findOne(googleId).then(data => {
                // console.log("findOne",data);
                if (!data) {
                    var userData = new User({
                        username: profile._json.name,
                        emailId: profile._json.email,
                        googleId: profile._json.sub,
                        thumbnail: profile._json.picture,
                        role: role,
                        department: department
                    })
                    userOperations.createUser(userData).then(res => done(null, res));
                }
                else {
                    done(null, data);
                }
            }).catch(err => {
                console.log("error is:", err);
            })

            // console.log("profile data is", profile._json);

        }
    )
);