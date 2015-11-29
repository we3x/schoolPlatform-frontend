'use strict'

require('angular');
angular.module('schoolPlatform.student',[
  require('angular-ui-router')
])
  .config(require('./config.js'));
