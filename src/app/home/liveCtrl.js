var app = angular.module("liveModule", [
  "firebase",
  'angularUtils.directives.dirPagination'
]);

app.controller("liveCtrl", function($scope, firebaseService, $timeout) {
  $scope.peakReached = true;

  $scope.liveData = firebaseService.get();

  //After 5 seconds, if there is no data from firebase, hide div
  $timeout(function(){
    if($scope.liveData.length === 0) {
      $scope.peakReached = true;
    }
    else {
      $scope.peakReached = false;
    }
  }, 10000);

});
