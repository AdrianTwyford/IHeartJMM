/**
 * Created by hamishdickson on 31/03/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var classes_hdlr = require('./private/handlers/classes.js');

// note for AT: this opens up a rest api - if you type in https://mysterious-river-9125.herokuapp.com/v1/classes.json
// you will get a json object in with the classes data - which at the moment is just dummy stuff
app.get('/v1/classes.json', classes_hdlr.list_all);

app.set('port', process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});