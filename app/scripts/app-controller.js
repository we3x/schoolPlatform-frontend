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
      $window.sessionStorage.id = $scope.user.id;
      $window.sessionStorage.username = $scope.user.username;
    }).then(function(){
      if ($scope.user.type == 'professor')
        $state.go('professor.newText');
      if ($scope.user.type == 'student')
        $state.go('student.home');
      if ($scope.user.type == '')
        $state.go('home');
    })
  }
];
