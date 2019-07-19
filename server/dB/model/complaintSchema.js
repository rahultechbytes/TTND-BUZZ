const mongoose = require('mongoose');

var Schema = mongoose.Schema

let department = ['Hardware', 'Infrastructure', 'Others']
let status = ['Pending', 'In Progress', 'Resolved']

const complaintSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    department: { type: String, enum: department, required: true },
    title: { type: String, required: true },
    name: String,
    emailId: String,
    concern: { type: String, required: true },
    attachment: String,
    status: { type: String, enum: status, required: true, default: 'Pending' },
    issueId: String,
    assignedTo: {
        username: String,
        emailId: String
    }
})

var complaintModel = mongoose.model('Complaints', complaintSchema);

module.exports = complaintModel; 
