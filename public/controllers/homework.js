/**
 * Created by hamishdickson on 12/04/15.
 */
(function () {
    var app = angular.module('homework-controller', []);

    app.directive('homework', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/homework.html',
            controller: function () {

            },
            controllerAs: 'hwCtrl'
        };
    });

})();