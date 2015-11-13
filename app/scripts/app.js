'use strict'

require('angular');

angular.module('schoolPlatform', [
  require('angular-ui-router'),
])
  .config(require('./config.js'))
  .controller('schoolPlatformController', require('./app-controller.js'))
  .constant('API_URL', 'http://192.168.33.3:8000')
