/**
 * Created by hamishdickson on 31/03/15.
 */
(function () {
    var app = angular.module('MyApp', ['ngRoute', 'mgcrea.ngStrap', 'main-controller']);

    app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })
            .otherwise({
                redirectTo: '/'
            });

    }]);
})();