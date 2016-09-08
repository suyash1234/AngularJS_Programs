var app=angular.module("myApp",['ngRoute'])
app.config(['routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'/home/bridgeit/Documents/suyash/angularjs/practice.html/mainRoute.html'
  })
  .when('/validation',{
    templateUrl:'/home/bridgeit/Documents/suyash/angularjs/practice.html/validation.html'
  })
  .when('/filter',{
    templateUrl:'/home/bridgeit/Documents/suyash/angularjs/practice.html/filter.html'
  })
  .when('/first',{
    templateUrl:'/home/bridgeit/Documents/suyash/angularjs/practice.html/first.html'
  });
}]);
