const complaint = require('../model/complaintSchema');

fetchComplaint = (emailId) => {
    return complaint.find({ 'assignedTo.emailId': emailId }).sort({ createdAt: -1 });
}

updateComplaint = (status, issueId) => {
    console.log("in resolve operation --------", status, issueId);
    return complaint.findOneAndUpdate({ issueId }, { $set: { status } }, { new: true });
}

module.exports = {
    fetchComplaint,
    updateComplaint
}