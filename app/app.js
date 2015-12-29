'use strict';

var app = angular.module('MyApp',[
	'ui.router',
	//'directives',
	//'services.home',
	'controllers.homeCtrl',
	'controllers.homeDetailCtrl',
])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'views/home.html',
			controller:'homeCtrl'
		})
		.state('user-detail',{
			url:'/home/001',
			templateUrl:'views/user-detail.html',
			controller:'homeDetailCtrl'	
		})
})
