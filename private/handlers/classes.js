/**
 * Created by hamishdickson on 03/04/15.
 */
var helpers = require('./helpers.js');

// note for AT: normally this would be the bit that comes out of a database
exports.list_all = function(req, res) {
    helpers.send_success(res,
        { "classes" : [
                {
                    "className" : "Maths",
                    "description": "Basically maths is cool, don't do a soft subject like media"
                },
                {
                    "className" : "Further Maths",
                    "description": "Further maths is also cool."
                }
            ]
        });
};