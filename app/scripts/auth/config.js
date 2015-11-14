'use strict'

module.exports = [
  '$stateProvider',
  function authConfig($stateProvider) {

    $stateProvider
      .state('auth', {
        url : '/auth',
        template: '<div ui-view></div>',
        controller: 'LoginController'
      })
      .state('auth.login', {
        url: '/login',
        public: true,
        templateUrl: 'scripts/auth/views/login.html'
      })
  }
];

