
  (function(){
    'use strict'


        function UserController($rootScope, $log, UserFactory){
        var vm = this
        activate();
        vm.klass = getKlass()
        


        function activate(){
          setCurrentUser(getCurrentUser())
        }

        function getKlass(){
            return vm.user.klass.room_number;
        }

        function getCurrentUser(){
          return UserFactory.getCurrentUser()
        }

        function setCurrentUser(data){
          vm.user = data;
        }



        }



    angular
    .module('app')
    .controller('UserController', UserController) 




  }());