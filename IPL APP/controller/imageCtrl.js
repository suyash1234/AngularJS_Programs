angular.module('myApp').controller('imgCtrl', function($scope) {
    $scope.getUrl = function(imagePath) {
        var storage = firebase.storage();
        var pathRef = storage.ref();
        pathRef.child(imagePath).getDownloadURL().then(function(url) {
            console.log(imagePath);
            console.log(url);
            // $scope.slides.push(url);
            document.getElementById(imagePath).src = url;

        });
    }
});
