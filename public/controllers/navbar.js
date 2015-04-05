/**
 * Created by hamishdickson on 05/04/15.
 */
(function () {
    var app = angular.module('navbar-controller', []);

    app.controller('NavbarCtrl', ['$scope', 'Auth', function ($scope, Auth) {
        $scope.logout = function() {
            Auth.logout();
        };
    }]);
})();