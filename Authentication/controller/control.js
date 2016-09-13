var app = angular.module('appName');

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://login-392cc.firebaseio.com/");
    return $firebaseAuth(ref);
  }
]);

app.controller('loginCtrl', ['$scope', '$state', '$http', 'Auth',
  function($scope, $state, $http, Auth) {
    $scope.auth = Auth;
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });
    $scope.login = function() {
      Auth.$authWithPassword({
        email: $scope.email,
        password: $scope.password
      })
      .then(function(authData) {
        console.log('Logged in as:', authData.uid);
        $state.go('profile.html');
      })
      .catch(function(err) {
        console.log('error:',err);
        $state.go('login.html');
      });
    };
  }
]);
