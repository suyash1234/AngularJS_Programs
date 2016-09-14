var app = angular.module("myApp", ["ngRoute","firebase"])

.config(function($routeProvider) {
  $routeProvider
        .when("/login", {
            templateUrl: "template/login.html",
            controller: "loginCtrl"
        })
        .when("/profile", {
            templateUrl: "template/profile.html"
            //controller: "profileCtrl"
        })
        .when("/register", {
            templateUrl: "template/register.html",
            controller: "registerCtrl"
        })
        .otherwise({
          redirectTo:"/login"
        });
});
