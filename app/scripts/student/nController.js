'use strict'

module.exports = [
  '$window',
  '$scope',
  'studentService',
  'notes',
  function tController($window, $scope,studentService, notes){
          $scope.notes = notes.data;
  }
];

