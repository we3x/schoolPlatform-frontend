'use strict'

module.exports = [
  '$scope',
  '$http',
  '$state',
  function schoolPlatformConfig($scope, $http, $state){
    $http.get('http://192.168.33.3:8000/api/v1/me/').success(function(data){
     $scope.user = data[0];
    }).then(function(){
      if ($scope.user.type == 'professor')
        $state.go('professor');
      if ($scope.user.type == 'student')
        $state.go('student.home');
      if ($scope.user.type == '')
        $state.go('home');
    })}
];
