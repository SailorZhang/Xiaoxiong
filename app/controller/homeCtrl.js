'use strict';

angular.module('controllers.homeCtrl',[])
.controller('homeCtrl',function($scope,homeSvc){
    homeSvc.loadData().then(function(data){
        //console.log(data.data.productSearchPage);
        $scope.shops = data.data.productSearchPage.products;
        console.log($scope.shops);
    })
});