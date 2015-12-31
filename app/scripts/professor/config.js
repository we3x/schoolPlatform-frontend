'use strict'

module.exports = [
  '$stateProvider',
  function studentConfig($stateProvider){
    $stateProvider
    .state('professor',{
      url: '/professor/new-text',
      resolve : {
        subjects : ['$window','professorService',function subjects($window, professorService){
          return professorService.getSubjects($window.sessionStorage.id)
        }]
      },
      templateUrl: 'scripts/professor/views/professor.html',
      controller: 'professorController'
    });
  }
];
