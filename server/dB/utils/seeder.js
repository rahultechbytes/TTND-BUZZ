const userModel = require('../../dB/model/userSchema');
const { dbConnection } = require('../utils/connection');
const seedData = require('./seedData');

function seeder() {
    if (dbConnection.collections.users) {
        userModel.find({}).then(res => {
            if (res.length === 0) {
                userModel.insertMany(seedData).then(res => {
                    console.log('user data inserted');
                });
            }
        }).catch(err => {
            console.log('error during seeding the data');
        })
    }
    else {
        userModel.insertMany(seedData).then(res => {
            console.log('user data inserted');
        });
    }
}



module.exports = seeder;
