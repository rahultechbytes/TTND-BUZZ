const mongoose = require('mongoose');
const dbConfig =require('./config');
mongoose.connect(dbConfig.dbURL, {useNewUrlParser: true,useFindAndModify:false,useCreateIndex: true});


const dbConnection = mongoose.connection;

dbConnection.once('open',()=>{
    console.log('db started..');
});

module.exports = mongoose;
