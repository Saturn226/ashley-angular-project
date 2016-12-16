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


      .state('home.activities',{
        url: 'activities',
        templateUrl: "activity/activities.html",
        controller: 'ActivityController as vm'
      })

      .state('home.children',{
        url:'children',
        templateUrl: "children/children.html",
        controller: 'ChildController as vm'
      })

      .state('home.child',{
        url:'children/:id',
        templateUrl: "children/show.html",
        controller: 'ChildController as vm'
      })

      .state('home.child.events',{
        url: '/events',
        templateUrl: "event/events.html",
        controller: 'EventController as vm'
      })

       .state('home.events',{
        url: 'events',
        templateUrl: "event/events.html",
        controller: 'EventController as vm'
      })

    //   .state('home.login', {
    //   url: 'login',
    //   templateUrl: 'auth/_login.html',
    //   controller: 'AuthController',
    //   onEnter: ['$state', 'Auth', function($state, Auth) {
    //     Auth.currentUser().then(function (){
    //       $state.go('home');
    //     })
    //   }]
    // })
    // .state('home.register', {
    //   url: 'register',
    //   templateUrl: 'auth/_register.html',
    //   controller: 'AuthController',
    //   onEnter: ['$state', 'Auth', function($state, Auth) {
    //     Auth.currentUser().then(function (){
    //       $state.go('home');
    //     })
    //   }]
    // });
      $urlRouterProvider.otherwise("/")
    })
}());