'use strict';

angular.module('controllers.userDetailCtrl',[])
.controller('userDetailCtrl',function(loaduserSvc,$scope,$stateparams){
    $scope.user = loaduserSvc.get($stateParams.userId)
})