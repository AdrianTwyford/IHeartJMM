var helpers = require('./helpers.js');

exports.login = function(req, res) {

    var email = req.body.email;
    var pwd = req.body.password;

    if (email == "test@test.com" && pwd == "password") {
        helpers.send_success(res,
            {"allGood": "That worked"});
    } else {
        var err = {
            "code": "400",
            "message": "not ok"
        };
        helpers.send_failure(res, err.code, err);
    }
};