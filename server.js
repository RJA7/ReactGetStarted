var logger = require('winston');
var http = require('http');
var app = require('./app');
var env = process.env;

var port = parseInt(env.PORT, 10) || 80;
var server = http.createServer(app);

env.NODE_ENV = env.NODE_ENV || 'development';

server.listen(port);

function onError(error) {
    logger.error(error);
}

function onListening() {
    logger.info('==============================================================');
    logger.info('|| server start success on port = ' + port + ' in ' + env.NODE_ENV + ' version ||');
    logger.info('==============================================================');
}

server.on('error', onError);
server.on('listening', onListening);
