
var app = angular.module("myApp", []);
app.directive("w3TestDirective", function() {
    return {
        restrict : "M",
        replace : true,
        template : "<h1>hello angular js!</h1>"
    };
});
