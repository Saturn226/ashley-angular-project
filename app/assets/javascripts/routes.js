(function(){
  'use strict'


  angular
    .module("app")
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
      .state('home',{ 
        url: '/',
        templateUrl: "home/home.html",
        controller: 'HomeController as vm'
      })
      .state('home.children',{
        url:'children',
        templateUrl: "children/child.html",
        controller: 'ChildController as vm'
      })
      $urlRouterProvider.otherwise("/")
    })
}());