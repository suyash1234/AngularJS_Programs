//create a module  connected to myApp and inject the services
var app = angular.module("myApp", ["ngRoute", "firebase"])
// use config to configure the routes
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
            redirectTo: "/login"
        });
});
//closing of config
