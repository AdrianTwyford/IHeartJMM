/**
 * Created by hamishdickson on 03/04/15.
 */
var helpers = require('./helpers.js');

// note for AT: normally this would be the bit that comes out of a database
exports.list_all = function(req, res) {
    helpers.send_success(res,
        { "classes" : [
                {"className" : "Dummy Class 1"},
                {"className" : "Dummy Class 2"}
            ]
        });
};