// angular.module("myApp")
//     .factory('MyService', function($firebase, $timeout) {
//         var vm = {};
//         var imageArray =[];
//
//         vm.getDatabase = function(callback) {
//
//             var fbref = firebase.database().ref("team_info");
//             // var fbObject = $firebaseObject(fbref);
//             // fbObject.$loaded().then(function(obj) {
//             fbref.on("value", function(obj) {
//                 var imageTemp = obj.val();
//                 for (i in imageTemp) {
//                     getUrl(imageTemp[i].team_img_url,imageTemp[i].team_name,function(url,caption){
//                    imageArray.push({'src':url,'caption':caption});
//           //         console.log("Arc"+imageArray.length);
//                        });
//                 }
//             });
//             callback(imageArray);
//         }
//         getUrl = function(imagePath, imageCaption, callback) {
//             var storage = firebase.storage();
//             var pathRef = storage.ref();
//             pathRef.child(imagePath).getDownloadURL().then(function(url) {
//                 callback(url, imageCaption);
//             });
//         }
//         return vm;
//     });
