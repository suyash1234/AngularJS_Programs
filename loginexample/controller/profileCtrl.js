angular.module("myApp").controller("profileCtrl", function( $scope, $location) {
    //make a function logout.This function will work when we submit on logout buttton
    $scope.logout= function() {
      $location.path("/login");
    }
  });
