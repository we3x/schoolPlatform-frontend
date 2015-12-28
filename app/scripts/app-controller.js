'use strict'

module.exports = [
  '$scope',
  '$state',
  '$window',
  '$http',
  'API_URL',
  function schoolPlatformConfig($scope, $state, $window, $http, API_URL){
    $http.get(API_URL + 'me/').then(function(result){
      $scope.user = result.data[0];
      $window.sessionStorage.me = $scope.user.need;
    }).then(function(){
      if ($scope.user.type == 'professor')
        $state.go('professor');
      if ($scope.user.type == 'student')
        $state.go('student.home');
      if ($scope.user.type == '')
        $state.go('home');
    })
  }
];
