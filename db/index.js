var config = require('../config/' + process.env.NODE_ENV);
var logger = require('../helpers/logger');
var mongoose = require('mongoose');
var db;

mongoose.connect(config.dbHost, config.dbName, config.dbPort, {
    user: config.dbUser,
    pass: config.dbPass
});

db = mongoose.connection;


function onConnected() {
    logger.info('Connected to MongoDB');
}

function onError(err) {
    logger.error(err);
}

db.once('connected', onConnected);
db.on('error', onError);

module.exports = db;

