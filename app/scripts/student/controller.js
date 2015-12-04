'use strict'

module.exports = [
  '$scope',
  '$http',
  '$stateParams',
  'API_URL',
  function studentController($scope, $http, $stateParams, API_URL){
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
    $scope.sbct = $stateParams.subject;
  }
]
