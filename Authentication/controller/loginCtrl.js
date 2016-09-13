angular.module("myApp").controller("loginCtrl", login);

function login($scope, $firebaseObject, $location, $state, $cookies) {

    console.log($cookies.get("userCookies"));
    // download the data into a local object
    //$scope.data = $firebaseObject(fbref);
    $scope.submit = function(data) {
        var fbref = firebase.database().ref("user");
        //  alert(data.username)
        //  console.log(fbref);
        fbref.orderByChild("EMAIL").equalTo(data.username).on("child_added", function(d) {
            //console.log('data',d.val());
            $scope.userData = d.val();

            if ($scope.userData.password === data.password) {
                // $state.go("/home");
                $cookies.put("userCookies", data.username);
                //  console.log("login success");
                $state.go('profile');

            } else {
                //  $state.go('login');
                alert("First register yourself");
                //console.log("login failed");
                //  alert("Wrong username or password.First register yourself ")
                $scope.error = "Login failed!";
            }




        });




        // var fbref = firebase.database().ref("user");
        // var fbObject = $firebaseObject(fbref);
        // // fetch general data of all the teams
        // fbObject.$loaded().then(function(obj) {
        //     $scope.teamsData = obj;
        //     console.log("object",obj);
        // });

    };
};
