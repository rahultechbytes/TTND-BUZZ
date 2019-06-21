const complaint = require('../model/complaintSchema');

createComplaint = (complaintData) => {
    return complaintData.save();
}

fetchComplaint = (emailId,sk) => {
    return complaint.find({emailId}).sort({createdAt: -1}).limit(5).skip(sk);
}

module.exports = {
    createComplaint,
    fetchComplaint
}