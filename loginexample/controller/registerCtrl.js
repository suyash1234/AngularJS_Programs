//make a module and bind controller with the myApp and inject the services in function
angular.module("myApp").controller("registerCtrl", function($firebase, $scope, $location, $timeout) {
    //make a function login.This function will work when we submit on login buttton
    $scope.register = function() {
            //initialize error with null value
            $scope.error = null;
            //use firebase auth service to create email and password and save email and password in firebase
            firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password).catch(function(err) {
                $scope.error = err.message; //store the error message in $scope.error
                alert(err.message); //print the message in alert box
                console.log(err.message); //print the message in console
                //use then function of promises to check the condition
            }).then(function() {
                console.log("error consloe:" + $scope.error);
                //check the condition using if-else
                if ($scope.error == null) {
                    alert("Registration successful.Now u can Login"); //print the message in alert box
                    //use timeout function for 1 sec only and give the location path to login
                    $timeout(function() {
                        $location.path('/login');
                    }, 1);
                } else {
                    $location.path("/register"); //if the condition is not true then path will be registration
                }
            });
        }
        //login close
});
//login controller close
