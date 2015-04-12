/**
 * Created by hamishdickson on 31/03/15.
 */
(function () {
    var app = angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap',
        'main-controller', 'login-controller', 'navbar-controller']);

    app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })
            .otherwise({
                redirectTo: '/'
            });

    }]);
})();