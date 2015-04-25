(function () {
    var app = angular.module('main-controller', []);

    app.controller('MainController', ['$http', '$rootScope', '$alert', function ($http, $rootScope, $alert) {

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
                        duration: 5
                    });
                });
        }

        this.set = null;

        this.isSet = function(name) {
            return name == this.set;
        };

        this.setClass = function(name) {
            this.set = name;
        };

        this.getClass = function() {
            return this.set;
        }
    }]);
})();