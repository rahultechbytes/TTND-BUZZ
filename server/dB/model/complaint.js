const mongoose = require('../utils/connection');

var Schema = mongoose.Schema

var complaintSchema = new Schema({
    department: {type: String},
    title: {type: String},
    name: {type: String},
    email: {type: String},
    concern: {type: String},
    attachment: {type: String},
    issueId: {type: Number},
    assignedTo: {type: String}
});

var complaintModel = mongoose.model('Complaints',complaintSchema);

module.exports = complaintModel; 
