const complaint = require('../model/complaintSchema');

createComplaint = (complaintData) => {
    return complaintData.save();  
}

fetchComplaint = (emailId, filter) => {
    if (filter === 'All Complaints') {
        return complaint.find({ emailId }).sort({ createdAt: -1 });
    }
    else {
        return complaint.find({ $and: [{ emailId }, { status: filter }] }).sort({ createdAt: -1 });
    }
}

module.exports = {
    createComplaint,
    fetchComplaint
}