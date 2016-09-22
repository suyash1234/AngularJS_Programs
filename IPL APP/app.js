var app = angular.module('myApp', ['ui.router','firebase','angular-carousel-3d']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'template/home.html',
        })
        // .state('home', {
        //     url: '/home',
        //     templateUrl: 'template/home.html',
        // })
        // .state('home', {
        //     url: '/home',
        //     templateUrl: 'template/home.html',
        // })
        // .state('home', {
        //     url: '/home',
        //     templateUrl: 'template/home.html',
        // })
});
