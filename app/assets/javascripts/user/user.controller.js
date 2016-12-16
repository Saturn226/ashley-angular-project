(function(){

  function UserController(UserFactory){
    var vm = this
    
    activate();

    function activate(){
      return getUser()
    }

    function getUser(){
      return UserFactory.getUser()
        .then(setUser)

    }

    function setUser(user){
      vm.user = user
      vm.roomNumber = user.klass.room_number
      vm.username =  user.username
      vm.children = user.children
    }

  }

  angular
  .module('app')
  .controller('UserController', UserController)

}())