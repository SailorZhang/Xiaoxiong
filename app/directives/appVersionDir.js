'use strict';

angular.module('directives', [])

.directive('appVersion', [function() {
  return function(scope, elm, attrs) {
    elm.text('version: 0.01');
  };
}]);
