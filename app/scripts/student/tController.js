'use strict'

module.exports = [
  '$scope',
  '$stateParams',
  'studentService',
  function tController($scope, $stateParams, studentService){
    $scope.sbct = $stateParams.subject;
    studentService.texts(1)
    .then(function(result){
        $scope.texts = result.data.filter(function(entry){
                    return entry.subject === $scope.sbct
                });
      }).then(function(){
        $scope.getCurrent = function(cur){
          $scope.current = cur;
        }
    }).catch(function(err){
      console.log(err)
    })
  }
];
