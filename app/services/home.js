'use strict';
app.factory('homeSvc', function($http) {
  var homeSvc = {};
  homeSvc.loadData = function(){
    return $http.get('data/homeData.json').success(function(data){
            //return data.productSearchPage;
            return data.productSearchPage;
        })
  }
  return homeSvc;
});