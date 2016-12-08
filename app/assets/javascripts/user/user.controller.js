
  (function(){
    'use strict'


    function UserController($rootScope, $log){
            //$rootScope.user = Auth.currentUser();

    var vm = this
    vm.user = $rootScope.user;
    vm.klass = getKlass(vm.user)

    $log.log($rootScope)

    

    function getKlass(user){
        return user.klass.room_number;
    }



    }



    angular
    .module("app")
    .controller('UserController', UserController) 




  }());