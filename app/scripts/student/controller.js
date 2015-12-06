'use strict'

module.exports = [
  '$scope',
  '$stateParams',
  'studentService',
  '$q',
  function studentController($scope, $stateParams, studentService){
    $scope.sbct = $stateParams.subject;
    function init(){
    studentService.me().success(function(data){
      $scope.user = data[0];
    }).then(function(){
    studentService.subjects($scope.user.need)
    .success(function(data){
            $scope.subjects = data;
          })
    studentService.texts($scope.user.need)
    .success(function(data){
        $scope.texts = data.filter(function(entry){
            return entry.subject === $scope.sbct;
        });
        $scope.current = $scope.texts[0];
        $scope.getCurrent = function(cur){
          $scope.current = cur;
        }
      })
    })
    }
    init()
  }
]
