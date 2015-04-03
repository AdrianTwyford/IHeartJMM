/**
 * Created by hamishdickson on 03/04/15.
 */
var helpers = require('./helpers.js');

exports.list_all = function(req, res) {
    helpers.send_success(res,
        { "classes" : [
                {"className" : "Dummy Class 1"},
                {"className" : "Dummy Class 2"}
            ]
        });
};