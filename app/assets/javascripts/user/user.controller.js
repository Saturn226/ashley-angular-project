
  (function UserController(UserFactory){
    var vm = this;

    vm.name = "Ashley User"
    vm.getUsers = getUsers;
    vm.createUser = createUser;
    vm.deleteUser = deleteUser;
    vm.updateUser = updateUser;

    activate();

    function activate(){
      getUsers();
    }


    function getUsers(){
   
    }

    function getUser(){
      return UserFactory.getUser
    }

     function createUser(){

    }


     function updateUser(){

    }

    function deleteUser(){

    }

    function setUser(data){
      return vm.users = data

    }
    angular
    .module("app")
    .controller('UserController', UserController)

  }());