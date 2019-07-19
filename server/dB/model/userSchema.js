const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String },
    emailId: { type: String, required: true },
    googleId: { type: String, unique:true },
    thumbnail: { type: String},
    role: {type:String, default:'user'},
    department: {type: String, default: 'technology'}
});

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;

