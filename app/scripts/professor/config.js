'use strict'

module.exports = [
  '$stateProvider',
  function studentConfig($stateProvider){
    $stateProvider
    .state('professor',{
      url: '/professor',
      templateUrl: 'scripts/professor/views/professor.html',
      controller: 'professorController'
    });
  }
];
