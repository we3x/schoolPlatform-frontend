'use strict'

module.exports = [
  '$scope',
  '$http',
  'API_URL',
  function studentController($scope, $http, API_URL){
    $http.get(API_URL + 'me/').success(function(data){
      $scope.user = data[0];
    }).error(function(){
      console.log('error');
    }).then(function(){
    $http.get(API_URL + 'classes/'+ $scope.user.need + '/subjects/')
          .success(function(data){
            $scope.subjects = data;
          })
    $http.get(API_URL + 'classes/'+ $scope.user.need + '/texts/')
          .success(function(data){
            $scope.texts = data;
          })
    })
  }
]
