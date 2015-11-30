'use strict'

module.exports = [
  '$stateProvider',
  function studentConfig($stateProvider){
    $stateProvider
    .state('student',{
      url: '/student',
      controller: 'studentController',
      templateUrl: 'scripts/student/views/student.html'
    });
  }
];
