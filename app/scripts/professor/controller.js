'use strict'

module.exports = [
  '$window',
  '$scope',
  function professorController($window, $scope){
    $scope.username = $window.sessionStorage.username;
  }
]
