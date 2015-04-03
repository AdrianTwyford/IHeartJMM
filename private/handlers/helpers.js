/**
 * Created by hamishdickson on 03/04/15.
 */
exports.version = '0.1.0';

exports.make_error = function(err, msg) {
    var e = new Error(msg);
    e.code = err;
    return e;
};


exports.send_success = function(res, data) {
    res.writeHead(200, {"Content-Type": "application/json"});
    var output = { error: null, data: data };
    res.end(JSON.stringify(output) + "\n");
};


exports.send_failure = function(res, code, err) {
    var code = (err.code) ? err.code : err.name;
    res.writeHead(code, { "Content-Type" : "application/json" });
    res.end(JSON.stringify({ error: code, message: err.message }) + "\n");
};


exports.invalid_resource = function() {
    return exports.make_error("invalid_resource",
        "the requested resource does not exist.");
};

exports.no_such_class = function() {
    return exports.make_error("no_such_class",
        "The specified class does not exist");
};