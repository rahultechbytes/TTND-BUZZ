const userFeeds = require('../model/buzzSchema');

createFeed = (feeds) => {
    return feeds.save();
}

fetchFeed = () => {
    return userFeeds.find({});
}

// findId = (id)=>{
//     return userFeeds.findOne({ _id: id });
// }

// likeBuzz = (id, emailId, status) => {
//     if (status) {
//         console.log("status in IF",status)
//         return userFeeds.findOneAndUpdate(
//             { _id: id },
//             {
//                 $push: {
//                     Like: {
//                         userId: emailId
//                     }
//                 },
//                 $pull: {
//                     dislike: {
//                         userId: emailId
//                     }
//                 }
//             },
//             {
//                 new: true,
//                 useFindAndModify: true
//             }
//         )
//     }
//     else{
//         console.log("status in ELSE",status);
//         return userFeeds.findOneAndUpdate(
//             { _id: id },
//             {
//                 $pull: {
//                     Like: {
//                         userId: emailId
//                     }
//                 }
//             },
//             {
//                 new: true,
//                 useFindAndModify: true
//             }
//         )
//     }
// }

// dislikeBuzz = (id, emailId,status) => {
//     if (status) {
//         console.log("status in IF",status);
//         return userFeeds.findOneAndUpdate(
//             { _id: id },
//             {
//                 $push: {
//                     dislike: {
//                         userId: emailId
//                     }
//                 },
//                 $pull: {
//                     Like: {
//                         userId: emailId
//                     }
//                 }
//             },
//             {
//                 new: true,
//                 useFindAndModify: true
//             }
//         )
//     }
//     else{
//         console.log("status in ELSE",status)
//         return userFeeds.findOneAndUpdate(
//             { _id: id },
//             {
//                 $pull: {
//                     dislike: {
//                         userId: emailId
//                     }
//                 }
//             },
//             {
//                 new: true,
//                 useFindAndModify: true
//             }
//         )
//     }
// }
// const getBuzzById = (id)=>{
//     return userFeeds.findOne({_id:id});
// }

module.exports = {
    createFeed,
    fetchFeed
    // likeBuzz,
    // dislikeBuzz,
    // getBuzzById,
}