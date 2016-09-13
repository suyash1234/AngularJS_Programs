var app = angular.module('myApp', ['ui.router', 'firebase',"ngCookies"])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'template/login.html',
            controller: 'loginCtrl',
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'template/profile.html',
            controller: 'homeCtrl',
        });
        //  .state('register', {
        //      url: '/register',
        //      templateUrl: 'template/register.html',
        //      controller: 'registerCtrl',
        //  });
})
// .run(function($rootScope, $location,$cookies) {
//     // keep user logged in after page refresh
//     $rootScope.userCookies = $cookies.get('userCookies') || {};
//
//     $rootScope.$on('$locationChangeStart', function(event, next, current) {
//         // redirect to login page if not logged in
//         console.log("$on running.......");
//         if ($location.path() !== '/login' && !$rootScope.userCookies.currentUser) {
//             $location.path('/login');
//         }
//     });
// });
