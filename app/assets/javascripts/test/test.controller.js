
  (function(){
    'use strict'


      function TestController($rootScope, $log, Auth, TestFactory){
        var vm = this



       $log.log(getUser());
       
        function getUser(){
          vm.user = TestFactory.getUser();
         // $log.log(vm.user.name)
        }
      }
       



    angular
    .module('app')
    .controller('TestController', TestController) 

  }());