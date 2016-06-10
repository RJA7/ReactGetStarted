var express = require('express');
var router = express.Router();
var path = require('path');

module.exports = function () {

    /**
     * @api {get} main
     * @apiVersion 0.0.1
     * @apiName Name
     * @apiGroup Group
     *
     */
    router.get('/', function (req, res, next) {
        res.sendFile(path.join(__dirname.split('\\').slice(0, -1).join('\\'), 'index.html'));
    });

    return router;
};
