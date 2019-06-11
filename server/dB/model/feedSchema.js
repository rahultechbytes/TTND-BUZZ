const mongoose = require('../utils/connection');

const Schema = mongoose.Schema

let categoryType=['Activity', 'Lost and Found']

var feedSchema = new Schema({
    description: { type: String },
    category: { type: String, enum: categoryType, required: true },
    attachment: { type: String },
    createdAt: { type: String, default: Date.now() },
    Like: { type: Number },
    dislike: { type: Number }

});

var feedModel = mongoose.model('Feeds', feedSchema);

modeule.exports = feedModel;