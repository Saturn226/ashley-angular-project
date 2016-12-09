(function(){
  'use strict'



  function ChildController(ChildFactory, $stateParams,$log,$scope){
    var vm = this;
    vm.name = this.name;
  
    vm.getChildren = getChildren;
    vm.createChild = createChild;
    vm.deleteChild = deleteChild;
    vm.updateChild = updateChild;
    vm.getChild = getChild;
    vm.setChild = setChild;

    activate();

    function activate(){
      if ($stateParams.id)
       getChild($stateParams)
      else
       getChildren();
    }


    function getChildren(){
      return ChildFactory.getChildren()
        .then(setChildren)
    }

    function getChild(){
      return ChildFactory.getChild($stateParams)
        .then(setChild)
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

    function setChild(data){
      return vm.child = data
    }

  }

  angular
    .module("app")
    .controller('ChildController', ChildController)
}());