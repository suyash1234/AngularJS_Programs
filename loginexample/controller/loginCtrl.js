//make a module and bind controller with the myApp and inject the services in function
angular.module("myApp").controller("loginCtrl", function($firebase, $scope, $location, $timeout) {
    //make a function login.This function will work when we submit on login buttton
    $scope.login = function() {
            //initialize error with null value
            $scope.error = null;
            //use firebase auth service to sign in with email and password
            firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).catch(function(err) {
                $scope.error = err.message; //store the error message in $scope.error
                console.log(err.message); //print the message in console
                //use then function of promises to check the condition
            }).then(function() {
                console.log("error consloe:" + $scope.error);
                //check the condition using if-else
                if ($scope.error == null) {
                    //use timeout function for 1 sec only and give the location path to profile
                    $timeout(function() {
                        $location.path("/profile");
                    }, 1);

                } else {
                    alert("First register yourself"); // print the message in alert box
                }
            });
        }
        //login close
});
//login controller close
