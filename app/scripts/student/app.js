'use strict'

require('angular');
angular.module('schoolPlatform.student',[
  require('angular-ui-router')
])
  .config(require('./config.js'))
  .service('studentService', require('./service.js'))
  .run(require('./run.js'))
  .controller('studentController', require('./controller.js'))
  .controller('tController', require('./tController.js'));
