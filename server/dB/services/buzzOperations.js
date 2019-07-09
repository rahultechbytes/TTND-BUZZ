const userFeeds = require('../model/buzzSchema');

createFeed = (feeds) => {
    return feeds.save();
}

fetchFeed = (sk, filter, emailId) => {
    console.log("emailId===>", emailId);
    console.log('filter====>', filter);
    if (filter === 'My Buzz') {
        return userFeeds.find({ emailId: emailId }).sort({ createdAt: -1 }).limit(5).skip(sk);
    }
    else if (filter === 'Activity' || filter === 'Lost and Found') {
        return userFeeds.find({ category: filter }).sort({ createdAt: -1 }).limit(5).skip(sk);
    }
    else {
        return userFeeds.find({}).sort({ createdAt: -1 }).limit(5).skip(sk);
    }
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