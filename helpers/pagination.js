var CONSTANTS = require('../constants/main');

module.exports.skip = function (query) {
    var limit = query.limit || CONSTANTS.LIMIT;
    return (query.page - 1) * limit || 0;
};

module.exports.limit = function (query) {
    return parseInt(query.limit, 10) || CONSTANTS.LIMIT;
};
