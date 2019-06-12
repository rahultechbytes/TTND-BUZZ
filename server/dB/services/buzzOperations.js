const userFeeds = require('../model/buzzSchema');

createFeed = (feeds)=>{
    return feeds.save();
}

fetchFeed = (feeds)=>{
    return userFeeds.find({});
}


module.exports = {
    createFeed,
    fetchFeed
}