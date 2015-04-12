/**
 * Created by hamishdickson on 12/04/15.
 */
var helpers = require('./helpers.js');

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
                            "mark": "95%"
                        },
                        {
                            "homeworkName": "Mechanics",
                            "mark": "95%"
                        },
                        {
                            "homeworkName": "Statistics",
                            "mark": "15%"
                        }
                    ]
                },
                {
                    "subject": "Biology",
                    "homework": [
                        {
                            "homeworkName": "Whatever biology people do",
                            "mark": "95%"
                        }
                    ]
                }
            ]
        });
};

exports.homework_by_teacher = function(req, res) {
    var teacher = req.params.teacher;

    helpers.send_success(res,
        {
            "teacher": teacher,
            "homeworks" : [
                {
                    "subject": "Maths",
                    "homework": [
                        {
                            "homeworkName": "Calculus",
                            "students": [
                                {
                                    "name": "bobby",
                                    "mark": "95%"
                                }
                            ]
                        },
                        {
                            "homeworkName": "Mechanics",
                            "students": [
                                {
                                    "name": "bobby",
                                    "mark": "95%"
                                }
                            ]
                        },
                        {
                            "homeworkName": "Statistics",
                            "students": [
                                {
                                    "name": "bobby",
                                    "mark": "25%"
                                }
                            ]
                        }
                    ]
                },
                {
                    "subject": "Biology",
                    "homework": [
                        {
                            "homeworkName": "Whatever biology people do",
                            "students": [
                                {
                                    "name": "bobby",
                                    "mark": "55%"
                                }
                            ]
                        }
                    ]
                }
            ]
        });
};

exports.questions_by_homework = function(req, res) {
    var homework = req.params.homework;

    helpers.send_success(res,
        {
            "homework": homework,
            "questions" : [
                {
                    "question": "Some daft question with some stuff",
                    "marks": 5
                },
                {
                    "question": "Some daft question with some stuff, a bit harder this time",
                    "marks": 10
                }
            ]
        });
};

exports.homework_by_class = function(req, res) {
    var className = req.params.className;

    helpers.send_success(res,
        {
            "className": className,
            "homworks": [
                {
                    "id": 1,
                    "name": "Homework 1",
                    "questions": [
                        {
                            "question": "Some daft question with some stuff",
                            "marks": 5
                        },
                        {
                            "question": "Some daft question with some stuff, a bit harder this time",
                            "marks": 10
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Homework 2",
                    "questions": [
                        {
                            "question": "Some daft question with some stuff part 2",
                            "marks": 5
                        },
                        {
                            "question": "2 Some daft question with some stuff, a bit harder this time",
                            "marks": 10
                        }
                    ]
                }
            ]
        });
};