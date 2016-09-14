angular.module("myApp").controller("loginCtrl",function($firebase,$scope,$location,$timeout){

$scope.login = function(){

$scope.error = null;

firebase.auth().signInWithEmailAndPassword($scope.email,$scope.password).catch(function(err){
$scope.error=err.message;
console.log(err.message);
}).then(function(){
  console.log("error consloe:"+$scope.error);
if($scope.error == null)
{
  $timeout(function()
  {
    $location.path("/profile");
  },1);

}
else{
  alert("First register yourself");
}
});
}
//login close

});
//login controller close
