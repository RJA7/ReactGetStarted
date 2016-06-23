var express = require('express');
var router = express.Router();
var main = require('./main');

module.exports = function () {

    router.use('/', main());

    router.use('/data', function (req, res, next) {
        res.send([
            {id: 1, author: "Pete Hunt", text: "This is one comment"},
            {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
        ]);
    });

    return router;
};
