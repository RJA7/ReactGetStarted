var Expander = function () {

    this.expandOne = function one(childPathName, projection, childCollectionName) {
        return [{
            $lookup: {
                from        : childCollectionName || childPathName,
                foreignField: '_id',
                localField  : childPathName,
                as          : childPathName
            }
        }, {
            $unwind: '$' + childPathName
        }, {
            $project: projection
        }];
    };

    this.expandMany = function many(childPathName, projection, childCollectionName) {
        var projectionKeys = Object.keys(projection);
        var itKeys = projectionKeys.length;
        var groupObj = {_id: {}};
        var groupObjId = groupObj._id;
        var projectObj = {};
        var projectionKey;

        while (itKeys--) {
            projectionKey = projectionKeys[itKeys];
            groupObjId[projectionKey] = '$' + projectionKey;

            projectObj[projectionKey] = '$_id.' + projectionKey;
        }
        delete groupObjId[childPathName];
        groupObj[childPathName] = {$push: '$' + childPathName + '_docs'};

        projectObj[childPathName] = 1;

        return [{
            $unwind: {
                path                      : '$' + childPathName,
                preserveNullAndEmptyArrays: true
            }
        }, {
            $lookup: {
                from        : childCollectionName || childPathName,
                foreignField: '_id',
                localField  : childPathName,
                as          : childPathName + '_docs'
            }
        }, {
            $unwind: '$' + childPathName + '_docs'
        }, {
            $group: groupObj
        }, {
            $project: projectObj
        }];
    };

    this.expandManyWithChildProjection = function (childPathName, projection, childProjection, childCollectionName) {
        var projectionKeys = Object.keys(projection);
        var childKeys = Object.keys(childProjection);
        var itChildKeys = childKeys.length;
        var itKeys = projectionKeys.length;
        var groupObj = {_id: {}};
        var groupObjId = groupObj._id;
        var projectObj = {};
        var key;

        while (itKeys--) {
            key = projectionKeys[itKeys];
            groupObjId[key] = '$' + key;

            projectObj[key] = '$_id.' + key;
        }
        delete groupObjId[childPathName];

        while (itChildKeys--) {
            key = childKeys[itChildKeys];
            childProjection[key] = '$' + childPathName + '_docs.' + key;
        }
        groupObj[childPathName] = {$push: childProjection};

        projectObj[childPathName] = 1;

        return [{
            $unwind: {
                path                      : '$' + childPathName,
                preserveNullAndEmptyArrays: true
            }
        }, {
            $lookup: {
                from        : childCollectionName || childPathName,
                foreignField: '_id',
                localField  : childPathName,
                as          : childPathName + '_docs'
            }
        }, {
            $unwind: '$' + childPathName + '_docs'
        }, {
            $group: groupObj
        }, {
            $project: projectObj
        }];
    };

};

var expander = new Expander();

module.exports = expander;
