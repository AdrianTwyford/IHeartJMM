/**
 * Created by hamishdickson on 31/03/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var compress = require('compression');

var login_hdlr = require('./private/handlers/login.js');
var classes_hdlr = require('./private/handlers/classes.js');
var students_hdlr = require('./private/handlers/students.js');
var homework_hdlr = require('./private/handlers/homework.js');

app.get('/v1/classes.json', classes_hdlr.list_all);

app.get('/v1/homework/:className.json', homework_hdlr.homework_by_class);

/*
/!* get the teacher's students *!/
app.get('/v1/students/:teacher.json', students_hdlr.students_by_teacher);

/!* get the homework for a student *!/
app.get('/v1/student/homework/:student.json', homework_hdlr.homework_by_student);

/!* get the homeworks under a teacher *!/
app.get('/v1/teacher/homework/:teacher.json', homework_hdlr.homework_by_teacher);

/!* get questions on a specific homework *!/
app.get('/v1/homework/questions/:homework.json', homework_hdlr.questions_by_homework);*/

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