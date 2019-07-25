const mongoose = require('mongoose');
const dbConfig = require('./config');

let dbConnection;
dbConnection = mongoose.connection;
function connect() {
    mongoose.connect(dbConfig.dbURL, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true });
    dbConnection.once('open', () => {
        console.log('db started..');
    });
}

// mongoose.set("debug",true);

module.exports = {
    connect,
    dbConnection

}