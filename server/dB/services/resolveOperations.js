const complaint = require('../model/complaintSchema');

fetchComplaint = (emailId, filter) => {
    if (filter === 'All Complaints') {
        return complaint.find({ 'assignedTo.emailId': emailId }).sort({ createdAt: -1 });
    }
    else {
        return complaint.find(
            { $and: [{ 'assignedTo.emailId': emailId }, { status: filter }]}).sort({ createdAt: -1 }
        );
    }
}

updateComplaint = (status, issueId) => {
    return complaint.findOneAndUpdate({ issueId }, { $set: { status } }, { new: true });
}

module.exports = {
    fetchComplaint,
    updateComplaint
}