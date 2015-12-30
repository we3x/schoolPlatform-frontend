'use strict'

module.exports = [
  '$window',
  '$scope',
  'studentService',
  'subjects',
  function studentController($window, $scope,studentService, subjects){
    $scope.subjects = subjects.data;
    $scope.username = $window.sessionStorage.username;

  }
]
