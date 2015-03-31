/**
 * Created by hamishdickson on 31/03/15.
 */
(function () {
    var app = angular.module('login-controller', []);

    app.directive('login', ['Auth', function (Auth) {
        return {
            restrict: 'E',
            templateUrl: '../views/login.html',
            controller: function () {
                this.login = function (username) {
                    Auth.login({
                        user: username
                    });
                }
            },
            controllerAs: "loginCtrl"
        }
    }]);
})();