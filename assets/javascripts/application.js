'use strict';
define([
  'angular',
  'app/controllers'
], function(angular,
            controllers) {
  return angular.module('application', ['application.controllers']);
});
