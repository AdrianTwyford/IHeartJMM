var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var compress = require('compression');

var login_hdlr = require('./private/handlers/login.js');
var classes_hdlr = require('./private/handlers/classes.js');

app.get('/v1/classes.json', classes_hdlr.list_all);

app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/api/login', login_hdlr.login);

app.get('/api/logout', function(req, res, next) {
    //req.logOut();
    res.send(200);
});

app.use(function(req, res, next) {
    if (req.user) {
        res.cookie('user', JSON.stringify(req.user));
    }
    next();
});

app.set('port', process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});