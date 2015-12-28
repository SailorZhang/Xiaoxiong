'use strict';

angular.module('controllers.loginCtrl',[])
.controller('loginCtrl',function($scope,$state,loginSvc){
   $scope.data = {};			
   $scope.doLogin = function(){
    loginSvc.checkUser($scope.data.username,$scope.data.password)
    .success(function(data){
      console.log('usename is ok')
    	$state.go('home');
    })
    .error(function(data){
    	alert('user is faild');
    })
   }

	// loginSvc.loadData().then(function(data){
	// 	$scope.users = data;
	// 	console.log($scope.users);
	// })
})