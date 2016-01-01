'use strict'

module.exports = [
  '$window',
  '$scope',
  'studentService',
  'subjects',
  '$state',
  function studentController($window, $scope,studentService, subjects, $state){
    $scope.subjects = subjects.data;
    $scope.username = $window.sessionStorage.username;
    $scope.logOut = function(){
      studentService.logOut()
      $state.go('auth.login')
    }

  }
]
