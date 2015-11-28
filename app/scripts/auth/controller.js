'use strict'

module.exports = [
  '$scope',
  'loginService',
  '$state',
  function loginController($scope, loginService, $state, $http) {

    $scope.user = {
      username: '',
      password: ''
    };

    $scope.login = function() {
      loginService.logIn($scope.user)
      .then(
        function loginSuccess() {
          $state.go('home');
        }
      );
    };
  }
];
