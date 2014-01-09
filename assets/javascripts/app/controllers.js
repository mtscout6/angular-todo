'use strict';
define(['angular'], function(angular) {
  return angular.module('application.controllers', [])
    .controller('TodoControl', ['$scope', '$injector', function($scope, $injector) {
      require(['app/controllers/todo'], function(todo) {
        $injector.invoke(todo, this, {'$scope': $scope});
      });
    }]);
});
