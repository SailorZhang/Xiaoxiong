'use strict';

angular.module('services.home',[])

app.factory('loaduserSvc', function() {
  var users = [
    {
      id:0,
      name:'Walter',
      lastText:'I am Walter',
      face:'img/ben.png'
    },
    {
      id:1,
      name:'gavin',
      lastText:'I am gavin',
      face:'img/ben.png'
    },
    {
      id:2,
      name:'andy',
      lastText:'I am andy',
      face:'img/ben.png'
    },
    {
      id:3,
      name:'nelson',
      lastText:'I am nelson',
      face:'img/ben.png'
    },
    {
      id:4,
      name:'cass',
      lastText:'I am cass',
      face:'img/ben.png'
    }
  ];
  return {
    all:function(){
      return users;
    },
    remove:function(user){
      users.splice(users.indexOf(user), 1);
    },
    get:function(userId){
      for(var i = 0;i < users.length;i++){
        if(users[i].id === parseInt(userId)){
          return users[i];
        }
      }
      return null;
    }
  }
});



