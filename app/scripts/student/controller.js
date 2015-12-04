'use strict'

module.exports = [
  '$scope',
  '$stateParams',
  'studentService',
  '$q',
  function studentController($scope, $stateParams, studentService){
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
            $scope.texts = data;
          })
    })
    }
    init()
    $scope.sbct = $stateParams.subject;
  }
]
