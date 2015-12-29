'use strict'

module.exports = [
  '$window',
  '$scope',
  'studentService',
  'notes',
  function tController($window, $scope,studentService, notes){
          $scope.notes = notes.data;
          $scope.text= ""
          $scope.dismiss = function(){
            $scope.text = "";
          }
          $scope.post = function(text){
            var writer = $window.sessionStorage.id;
            var id = $window.sessionStorage.me;
            studentService.postNote(text, writer, id);
            $window.location.reload();
          }
  }
];

