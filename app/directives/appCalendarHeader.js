'use strict';

angular.module('directives', [])

.directive('appCalendarHeader', [
	'$timeout',
	'$parse',
	function($timeout,$parse) {
	return {
      restrict: 'A',
      template: '<div class="years"><span class="title">YEAR</span><span class="value">{{curYear}}</span></div><div class="months" data-month="{{$index+1}}" ng-repeat="mon in months track by $index" ng-class="{odd: $even, on: $index+1 == curMonth}" ng-click="clickMonth($index+1)"><span class="title">{{mon}}</span><span class="value">{{$index+1}}</span></div>',
      link: function(scope, elm, attrs) {
        scope.months = ['JAN','FEB','MAR','APR','MAY','JUNE','JULY','AUG','SEPT','OCT','NOV','DEC'];

        var d= new Date();
        scope.curYear = d.getFullYear();
        scope.curMonth = d.getMonth() + 1;
        scope.onMonthChanged = $parse(attrs.onMonthChanged)(scope);

        scope.clickMonth = function(selMonth){
          scope.curMonth = selMonth;
          scope.onMonthChanged(selMonth);
        };
      }
    };
}]);
