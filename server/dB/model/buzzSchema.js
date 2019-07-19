const mongoose = require('mongoose');

const Schema = mongoose.Schema

let category=['Activity', 'Lost and Found']

var feedSchema = new Schema({
    username: {type: String},
    emailId: {type: String},
    description: { type: String },
    category: { type: String, enum: category, required: true },
    attachment: { type: String },
    createdAt: { type: Date, default: Date.now },
    Like: [{userId: { type: String}}],
    dislike: [{userId: { type: String}}],
    thumbNail: String
});

var buzzModel = mongoose.model('BuzzFeeds', feedSchema);

module.exports = buzzModel;