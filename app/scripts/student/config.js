'use strict'

module.exports = [
  '$stateProvider',
  function studentConfig($stateProvider){
    $stateProvider
    .state('student',{
      abstract: true,
      url: '/student',
      controller: 'studentController',
      templateUrl: 'scripts/student/views/student.html'
    })
    .state('student.home',{
      url: '/home',
      template: '<h1>Home</h1>'
    })
    .state('student.subject',{
      url: '/:subject',
      controller: 'tController',
      templateUrl: 'scripts/student/views/texts.html'
    })
  }
];
