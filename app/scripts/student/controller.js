'use strict'

module.exports = [
  '$scope',
  '$stateParams',
  'studentService',
  '$q',
  function studentController($scope, $stateParams, studentService){
    studentService.me().then(function(result){
      $scope.user = result["data"][0];
    }).then(function(){
    studentService.subjects($scope.user.need)
    .then(function(result){
            $scope.subjects = result["data"];
          })
    }).catch(function(err){
    })
    }
]
