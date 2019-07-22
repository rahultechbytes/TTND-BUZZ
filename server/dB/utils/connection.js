const mongoose = require('mongoose');
const dbConfig = require('./config');

function connect() {
    mongoose.connect(dbConfig.dbURL, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true });
    const dbConnection = mongoose.connection;
    dbConnection.once('open', () => {
        console.log('db started..');
    });
}

// mongoose.set("debug",true);

module.exports = {
    connect
}