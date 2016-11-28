(function(){
  'use strict'

  function HomeController(){
    var vm = this;

    vm.name = "Home Controller"
  }

  angular
    .module("app")
    .controller('HomeController', HomeController)
}());