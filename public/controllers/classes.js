/**
 * Created by hamishdickson on 06/04/15.
 */
(function () {
    var app = angular.module('class-controller', []);

    app.controller('ClassesController', ['$http', '$rootScope', '$alert', function ($http, $rootScope, $alert) {

        var classes = this;

        classes.classesData = [];

        var url = '/v1/classes.json';

        if ($rootScope.currentUser) {
            $http.get(url)
                .success(function (data) {
                    classes.classesData = data.data.classes;
                })
                .error(function () {
                    $alert({
                        title: 'Error!',
                        content: 'Oh dear - there was some kind of server error - please let us know!',
                        placement: 'top-right',
                        type: 'danger',
                        duration: 3
                    });
                });
        }

        this.set = "Dummy Class 1";

        this.isSet = function(name) {
            return name == this.set;
        };

        this.setClass = function(name) {
            this.set = name;
        };
    }]);
})();