const complaint = require('../model/complaintSchema');

fetchComplaint = (emailId) => {
    return complaint.find({ 'assignedTo.emailId': emailId }).sort({ createdAt: -1 });
}

module.exports = {
    fetchComplaint
}