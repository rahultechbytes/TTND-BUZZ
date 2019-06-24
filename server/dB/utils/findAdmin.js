const user = require('../model/userSchema');

const findAdmin = (department) => {
    return user.find({
        $and: [
            { role: 'admin' },
            { department }
        ]
    })
}

module.exports = findAdmin;