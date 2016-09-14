angular.module("myApp").controller("registerCtrl",function($firebase,$scope,$location,$timeout){

$scope.register = function(){

$scope.error = null;

firebase.auth().createUserWithEmailAndPassword($scope.email,$scope.password).catch(function(err){
$scope.error=err.message;
alert(err.message);
console.log(err.message);
}).then(function(){
  console.log("error consloe:"+$scope.error);
if($scope.error == null)
{
  alert("Registration successful.Now u can Login");
  $timeout(function()
  {
    $location.path('/login');
  },1);
}
else{
$location.path("/registration");
}
});
}
//login close

});
//login controller close
