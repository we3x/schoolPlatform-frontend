'use strict';

require('angular');

angular.module('schoolPlatform.auth',[
  require('angular-ui-router'),
  require('angular-messages')
])

  .config(require('./config'))

  .controller('LoginController', require('./controller.js'))

  .service('loginService', require('./service.js'))

  .run(require('./run.js'))

  .factory('authInterceptor', require('./interceptor.js'));
