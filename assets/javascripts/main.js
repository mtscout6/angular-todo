(function() {
  'use strict';

  window.name = 'NG_DEFER_BOOTSTRAP!';

  var options = {
    //urlArgs: "b=" + ((new Date()).getTime()),
    paths: {
      jquery: 'vendor/jquery/jquery',
      angular: 'vendor/angular/angular',
    },
    shim: {
      'angular' : {
        exports: 'angular'
      }
    }
  };

  require(options, [
    'jquery',
    'angular',
    'application'
    ],
    function($, angular, app) {

    var $html = angular.element($('html')[0]);

    angular.element().ready(function() {
      angular.resumeBootstrap([app.name]);
    });
  });

}).call(this);
