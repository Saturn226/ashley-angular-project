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
   
  }

  angular
    .module("app")
    .controller('HomeController', HomeController)
}());