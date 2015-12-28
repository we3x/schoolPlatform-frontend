'use strict'

module.exports = [
  '$window',
  '$scope',
  'studentService',
  'me',
  function studentController($window, $scope,studentService, me){
    studentService.getSubjects(me.data[0].need).then(function(resolve){
      $scope.subjects = resolve["data"];
    })

  }
]
