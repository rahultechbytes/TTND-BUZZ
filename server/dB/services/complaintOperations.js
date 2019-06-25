const complaint = require('../model/complaintSchema');

createComplaint = (complaintData) => {
    return complaintData.save();
}

fetchComplaint = (emailId) => {
    return complaint.find({emailId}).sort({createdAt: -1});
}

module.exports = {
    createComplaint,
    fetchComplaint
}