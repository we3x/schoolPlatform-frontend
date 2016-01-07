'use strict'

module.exports = [
  '$stateProvider',
  function studentConfig($stateProvider){
    $stateProvider
    .state('professor',{
      url: '/professor/',
      abstract: true,
      resolve : {
        subjects : ['$window','professorService',function subjects($window, professorService){
          return professorService.getSubjects($window.sessionStorage.id)
        }]
      },
      controller: 'professorController',
      templateUrl: 'scripts/professor/views/professor.html',
    })
    .state('professor.newText',{
      url: 'new-text/',
      resolve : {
        subjects : ['$window','professorService',function subjects($window, professorService){
          return professorService.getSubjects($window.sessionStorage.id)
        }]
      },
      templateUrl: 'scripts/professor/views/addText.html',
      controller: 'newTextController'
    })
    .state('professor.subject', {
      url:':id/',
      resolve : {
        texts: ['$stateParams', 'professorService',
          function($stateParams, professorService){
            return professorService.getTexts($stateParams.id)
          }
        ]
      },
      controller: 'tController',
      templateUrl: 'scripts/professor/views/texts.html'
    })
  }
];
