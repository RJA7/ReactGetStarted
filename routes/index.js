var express = require('express');
var router = express.Router();
var main = require('./main');

module.exports = function () {

    router.use('/', main());

    return router;
};
