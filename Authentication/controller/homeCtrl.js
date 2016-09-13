angular.module("myApp").controller("homeCtrl",function ($scope,$location, $firebaseObject,$location,$state ,$cookies) {
$scope.username = $cookies.get("userCookies");
$scope.logout = function()
{
  $cookies.remove("userCookies");
  $state.go('login');
}
});
