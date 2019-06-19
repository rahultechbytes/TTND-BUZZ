const user = require('../model/userSchema');

const findAdmin = () => {
    return user.find({
        role: 'admin'
    })
}

module.exports = findAdmin;