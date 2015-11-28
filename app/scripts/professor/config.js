'use strict'

module.exports = [
  '$stateProvider',
  function studentConfig($stateProvider){
    $stateProvider
    .state('profesor',{
      url: 'profesor/',
      templateUrl: 'scripts/professor/views/professor.html'
    });
  }
];
