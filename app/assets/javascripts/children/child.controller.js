(function(){

  function ChildController(ChildFactory,$stateParams){

    vm = this;
    activate();

    function activate(){
      if ($stateParams.id)
       getChild($stateParams)
      else
       getChildren();
    }


    function getChild(){
      return ChildFactory.getChild($stateParams)
        .then(setChild)
    }

    function getChildren(){
      return ChildFactory.getChildren()
        .then(setChildren)
    }

    function setChild(child){
      vm.child = child
      vm.age = child.age
      vm.name = child.name
      vm.class = child.klass
      vm.teacher = child.user
    }

    function setChildren(data){
      vm.children = data
    }

  }

  angular
  .module('app')
  .controller('ChildController', ChildController)
}())
