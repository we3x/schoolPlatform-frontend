'use strict'

module.exports = [
  '$scope',
  '$http',
  function schoolPlatformConfig($scope, $http){
    $http.get('http://192.168.33.3:8000/api/v1/me/').then(function(data){
      $scope.user = data[0];
    })
    console.log($scope.user)
    $scope.hello = "Helloooo :D " + $scope.user;
  }
];
