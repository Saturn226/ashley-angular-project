(function(){
  'use strict'

  function ChildController(ChildFactory){
    var vm = this;

    vm.name = "Child Controller"
    vm.getChildren = getChildren;
    vm.createChild = createChild;
    vm.deleteChild = deleteChild;
    vm.updateChild = updateChild;

    activate();

    function activate(){
      getChildren();
    }


    function getChildren(){
      return ChildFactory.getChildren()
        .then(setChildren)
    }

    function getChild(){
      return ChildFactory.getChild
    }

     function createChild(){

    }


     function updateChild(){

    }

    function deleteChild(){

    }

    function setChildren(data){
      return vm.children = data

    }

  }

  angular
    .module("app")
    .controller('ChildController', ChildController)
}());