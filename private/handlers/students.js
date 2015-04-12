/**
 * Created by hamishdickson on 12/04/15.
 */
var helpers = require('./helpers.js');

exports.students_by_teacher = function(req, res) {
    var teacher = req.params.teacher;

    helpers.send_success(res,
        {
            "teacher": teacher,
            "students" : [
                {"studentName" : "Dummy student 1"},
                {"studentName" : "Dummy student 2"},
                {"studentName" : "Dummy student 3"}
            ]
        });
};

exports.homework_by_student = function(req, res) {
    var student = req.params.student;

    helpers.send_success(res,
        {
            "student": student,
            "homeworks" : [
                {
                    "subject": "Maths",
                    "homework": [
                        {
                            "homeworkName": "Calculus",
                            "grade": "95%"
                        },
                        {
                            "homeworkName": "Mechanics",
                            "grade": "95%"
                        },
                        {
                            "homeworkName": "Statistics",
                            "grade": "15%"
                        }
                    ]
                },
                {
                    "subject": "Biology",
                    "homework": [
                        {
                            "homeworkName": "Whatever biology people do",
                            "grade": "95%"
                        }
                    ]
                }
            ]
        });
};