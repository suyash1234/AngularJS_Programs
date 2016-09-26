var app = angular.module("myApp", ['ngRoute'])
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "login.html"
        })
        .when('/display', {
            resolve: {
                "check": function($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: "display.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});
app.controller("myController", function($scope, $location, $rootScope) {
    $scope.submit = function() {
        if ($scope.username == "suyash" && $scope.password == "nanda") {
            $rootScope.loggedIn = true;
            $location.path("/display");
        } else {
            alert("wrong username or password");
        }
    }
});
