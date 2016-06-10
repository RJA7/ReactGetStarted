var env = process.env;
var nodeEnv = env.NODE_ENV = env.NODE_ENV || 'development';
var logger = require('winston');
var http = require('http');
var app = require('./app');
var db = require('./db');
var port = parseInt(env.PORT, 10) || 80;

var server = http.createServer(app);
app.set('db', db);

server.listen(port);

function onError(error) {
    logger.error(error);
}

function onListening() {
    logger.info('==============================================================');
    logger.info('|| server start success on port = ' + port + ' in ' + nodeEnv + ' version ||');
    logger.info('==============================================================');
}

server.on('error', onError);
server.on('listening', onListening);
