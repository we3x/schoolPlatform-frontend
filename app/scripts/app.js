'use strict'

require('angular');
require('./auth/app.js');
require('./professor/app.js');
// require('./student/app.js');

angular.module('schoolPlatform', [
  require('angular-ui-router'),
  'schoolPlatform.auth',
  'schoolPlatform.professor',
 // 'schoolPlatform.student',
])
  .config(require('./config.js'))
  .controller('schoolPlatformController', require('./app-controller.js'))
  .constant('API_URL', 'http://192.168.33.3:8000/api/v1/')
