'use strict'

module.exports = [
  function noteDirective(){
    return{
      restrict: 'E',
      controller:["$scope", "$window","studentService",
        function($scope, $window, studentService){
        $scope.isEditing = false;
        $scope.editing  = function(){
          $scope.isEditing = !$scope.isEditing;
        }
        $scope.isEditable = function(username){
          return $window.sessionStorage.username == username;
        }
        $scope.save = function(text){
          var id = $window.sessionStorage.me;
          studentService.putNote(text, id)
          $scope.editing();
        }
        $scope.delete = function(text){
          studentService.deleteNote(text)
          $window.location.reload();
        }
      }],
      templateUrl: 'scripts/student/views/note.html'
    }
  }
];
