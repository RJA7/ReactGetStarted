var dbHelper = require('./dbHelper');

describe('test', function () {

    before(function (done) {
        dbHelper.clearDB(done);
    });

    it('test', function (done) {
        done();
    });

    after(function (done) {
        dbHelper.clearDB(done);
    });
});
