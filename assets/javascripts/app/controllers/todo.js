'use strict';
define(['angular', 'application'], function(angular, application) {
  return application.controller('TodoControl', [
    '$scope',
    function TodoControl ($scope) {
      $scope.items = [{
          description: 'Item 1',
          completed: true
        }, {
          description: 'Item 2',
          completed: false
        }
      ];

      $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.items, function(item) {
          count += todo.completed ? 0 : 1;
        });
        return count;
      }
    });
});
