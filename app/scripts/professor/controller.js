'use strict'

module.exports = [
  '$window',
  '$scope',
  '$state',
  'professorService',
  'subjects',
  function professorController($window, $scope, $state, professorService, subjects){
    $scope.username = $window.sessionStorage.username;
    $scope.subjects = subjects.data;
    $scope.logOut = function(){
      professorService.logOut()
      $state.go('auth.login');
    }
  }
]
