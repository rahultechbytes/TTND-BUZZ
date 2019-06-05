const user = require('../model/userSchema');

createUser = (userData)=>{
    return userData.save();
}

findOne = (userId)=>{
    return user.findOne({
        googleId: userId
    })
}

module.exports = {
    createUser,
    findOne
}