'use strict'

require('angular');
angular.module('schoolPlatform.student',[
  require('angular-ui-router')
])
  .service('studentService', require('./service.js'))
  .config(require('./config.js'))
  .directive('noteDirective', require('./noteDirective.js'))
  .controller('studentController', require('./controller.js'))
  .controller('nController', require('./nController.js'))
  .controller('tController', require('./tController.js'));
