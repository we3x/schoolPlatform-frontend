'use strict'

module.exports = [
  '$scope',
  '$stateParams',
  'studentService',
  '$rootScope',
  function studentController($scope, $stateParams, studentService, $rootScope){
    studentService.subjects($rootScope.me.need)
    .then(function(result){
            $scope.subjects = result["data"];
          }).catch(function(err){
            console.log(err);
    })
    }
]
