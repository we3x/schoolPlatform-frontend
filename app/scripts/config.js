'use strict'

module.exports = [
  '$urlRouterProvider',
  '$stateProvider',
  function schoolPlatformConfig($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'schoolPlatformController',
        templateUrl: 'views/app-template.html'
      });
  }
];
