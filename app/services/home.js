'use strict';

angular.module('services.home',[])

.factory('homeSvc', function($http, $q) {
  var homeSvc = {};
  homeSvc.loadData = function(){
     return $http.get('https://randomuser.me/api/?results=10').then(function(data){
      return data.data.results;
    })
  }
  return homeSvc;
});



