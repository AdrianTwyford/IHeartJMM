/**
 * Classes handler
 *
 * todo rename - class is a keyword in javascript
 */
var helpers = require('./helpers.js');

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