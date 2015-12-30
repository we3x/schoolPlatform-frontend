'use strict'

require('angular');
angular.module('schoolPlatform.professor',[
  require('angular-ui-router')
])
  .config(require('./config.js'))
  .controller('professorController', require('./controller.js'));
