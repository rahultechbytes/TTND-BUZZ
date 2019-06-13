const userFeeds = require('../model/buzzSchema');

createFeed = (feeds)=>{
    return feeds.save();
}

fetchFeed = ()=>{
    return userFeeds.find({});
}


module.exports = {
    createFeed,
    fetchFeed
}