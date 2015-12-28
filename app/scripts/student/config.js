'use strict'

module.exports = [
  '$stateProvider',
  function studentConfig($stateProvider){
    $stateProvider
    .state('student',{
      abstract: true,
      url: '/student',
      resolve : {
        me : ['studentService',
          function(studentService){
            return studentService.getMe()
        }]},
      controller: 'studentController',
      templateUrl: 'scripts/student/views/student.html',
    })
    .state('student.home',{
      url: '/home',
      resolve : {
        notes : ['studentService', '$window',
          function(studentService, $window){
            return studentService.getNote($window.sessionStorage.me)
        }]
      },
      controller: 'nController',
      templateUrl: 'scripts/student/views/notify.html'
    })
    .state('student.subject',{
      url: '/:subject',
      resolve :{
        texts: ['$stateParams','studentService',
          function($stateParams, studentService){
            return studentService.getTexts($stateParams.subject);
          }
        ]
      },
      controller: 'tController',
      templateUrl: 'scripts/student/views/texts.html'
    })
  }
];
