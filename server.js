/**
 * Created by hamishdickson on 31/03/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var classes_hdlr = require('./private/handlers/classes.js');

app.get('/v1/classes.json', classes_hdlr.list_all);

app.set('port', process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});