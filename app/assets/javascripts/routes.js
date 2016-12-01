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

      .state('home.login', {
      url: 'login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthController',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    })
    .state('home.register', {
      url: 'register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthController',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    });
      $urlRouterProvider.otherwise("/")
    })
}());