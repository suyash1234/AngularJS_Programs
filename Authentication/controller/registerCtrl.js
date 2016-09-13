angular.module("myApp").controller("registerCtrl", register);

function register($scope, $firebaseObject, $location, $state) {
    $scope.rgtr = function(data) {
        var fbref = firebase.database().ref("user");

            //console.log('data',d.val());
            fbref.push({

                EMAIL: $scope.data.username,
                password: $scope.data.password
                  });
                  alert("data inserted successfuly");

 //        if(fbref.orderByChild("EMAIL").equalTo(data.username).on("child_added", function() {          })){
 // alert("You are already registered");
 //        }
 //        else{
 //
 //        }


  //       if (fbref.orderByChild("EMAIL").equalTo(data.username).on("child_added", function(d1) {alert("You are already registered");})) {
  //
  //       } else {
  //
  //
  //
  //       }
    }
};
