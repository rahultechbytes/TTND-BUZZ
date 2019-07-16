const userFeeds = require('../model/buzzSchema');

createFeed = (feeds) => {
    return feeds.save();
}

fetchFeed = (sk, filter, emailId) => {
    const findObj = {};

    if (filter === 'My Buzz') {
        findObj.emailId = emailId;
    }
    else if(filter === 'Activity' || filter === 'Lost And Found') {
        findObj.category = filter;
    }
    else {
        findObj
    }
    return userFeeds.find(findObj).sort({ createdAt: -1 }).limit(5).skip(sk);

}

deletePost = (id) => {
    return userFeeds.findByIdAndRemove({ _id: id });
}

likeBuzz = (id, emailId, status) => {
    if (status) {
        return userFeeds.findOneAndUpdate(
            { _id: id },
            {
                $push: {
                    Like: {
                        userId: emailId
                    }
                },
                $pull: {
                    dislike: {
                        userId: emailId
                    }
                }
            },
            {
                new: true,
                useFindAndModify: true
            }
        )
    }
    else {
        return userFeeds.findOneAndUpdate(
            { _id: id },
            {
                $pull: {
                    Like: {
                        userId: emailId
                    }
                }
            },
            {
                new: true,
                useFindAndModify: true
            }
        )
    }
}

dislikeBuzz = (id, emailId, status) => {
    if (status) {
        return userFeeds.findOneAndUpdate(
            { _id: id },
            {
                $push: {
                    dislike: {
                        userId: emailId
                    }
                },
                $pull: {
                    Like: {
                        userId: emailId
                    }
                }
            },
            {
                new: true,
                useFindAndModify: true
            }
        )
    }
    else {
        return userFeeds.findOneAndUpdate(
            { _id: id },
            {
                $pull: {
                    dislike: {
                        userId: emailId
                    }
                }
            },
            {
                new: true,
                useFindAndModify: true
            }
        )
    }
}
const getBuzzById = (id) => {
    return userFeeds.findOne({ _id: id });
}

module.exports = {
    createFeed,
    fetchFeed,
    likeBuzz,
    dislikeBuzz,
    getBuzzById,
    deletePost
}