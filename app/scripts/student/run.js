'use strict'

module.exports = [
  '$rootScope',
  'studentService',
  function run($rootScope, studentService){
    studentService.me().then(function(result){
      $rootScope.me = result["data"][0];
    }).catch(function(err){
      console.log(err);
    })
  }
]
