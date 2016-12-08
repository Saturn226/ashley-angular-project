(function(){
  'use strict'


  //ideally i would like to have a current_user object.
  //i would like this object to have functions such as getKlass or getChildren
  //current_user is currently being handled by devise
  // how would i create a current_user object?


  function HomeController(Auth, $rootScope, $state,$log){
    var vm = this;
    //$log.log($rootScope);
    vm.name = "Home Controller"
   
    $rootScope.signedIn = Auth.isAuthenticated;
    $rootScope.logout = Auth.logout;

    Auth.currentUser().then(function(user){
      $rootScope.user = user;
    });

    $rootScope.$on('devise:new-registration', function(e, user){
      $rootScope.user = user;
      $state.go('home');
    });

    $rootScope.$on('devise:login', function(e, user){
      $rootScope.user = user;
      $state.go('home');
    });

    $rootScope.$on('devise:logout', function(e, user){
      $rootScope.user = {};
      $state.go('home.login');
    });
    

  }

  angular
    .module("app")
    .controller('HomeController', HomeController)
}());