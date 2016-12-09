
  (function(){
    'use strict'


        function UserController($rootScope, $log){
        var vm = this
        vm.user = $rootScope.user;
        vm.klass = getKlass(vm.user)

        }

          function getKlass(user){
            return user.klass.room_number;
        }




    angular
    .module('app')
    .controller('UserController', UserController) 




  }());