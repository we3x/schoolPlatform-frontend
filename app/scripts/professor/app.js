'use strict'

require('angular');

angular.module('schoolPlatform.professor',[
  require('angular-ui-router'),
  'ngWYSIWYG'
])
  .config(require('./config.js'))
  .service('professorService', require('./service.js'))
  .controller('professorController', require('./controller.js'))
  .controller('newTextController', require('./professorControler.js'))
  .controller('editTextController', require('./eController.js'));
