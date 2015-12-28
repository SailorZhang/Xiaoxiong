'use strict';

angular.module('controllers.homeDetailCtrl',[])
.controller('homeDetailCtrl',function($scope,$stateparams,homeSvc){
   $scope.user = homeSvc.get($stateParams.userId);
})