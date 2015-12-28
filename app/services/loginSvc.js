'use strict';

angular.module('services.login',[])

.factory('loginSvc', function($http, $q) {
  var loginSvc = {};
  // loginSvc.loadData = function(){
  //    return $http.get('https://randomuser.me/api/?results=10').then(function(data){
  //     return data.data.results;
  //   })
  // }
  loginSvc.checkUser = function(name,pwd){
  	var deferred = $q.defer();
  	var promise = deferred.promise;
  	if(name == 'gavin' && pwd =='123456'){
  		deferred.resolve('Welcome ' + name + '!');
  	}else{
  		deferred.reject('Wrong credentials.');
  	}
  	promise.success = function(fn) {
        promise.then(fn);
        return promise;
    }
    promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
    }
    return promise;
  }
  return loginSvc;
});



