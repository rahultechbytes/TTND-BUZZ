const mongoose = require('../utils/connection');

var Schema = mongoose.Schema

let department=['Hardware','Infrastructure','Others']
let status=['Pending', 'In Progress', 'Resolved']

const complaintSchema = new Schema({
    department:{type: String, enum:department, required: true},
    title: {type: String, required: true},
    name: String,
    emailId: String,
    concern: {type: String, required: true},
    attachment: String,
    status: {type:String, enum: status, required: true},
    issueId: Number,
    AssignedTo: String
})

var complaintModel = mongoose.model('Complaints',complaintSchema);

module.exports = complaintModel; 
