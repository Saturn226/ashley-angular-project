(function(){

  function ChildController(ChildFactory,$stateParams){

    var vm = this;
    vm.createChild = createChild;
    vm.newChild = {}
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

    function editChild(child){
        return ChildFactory.editChild()
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

    function createChild(newChild){
        return ChildFactory.createChild(newChild)
          .then(function(response){
            vm.children.push(response.data)
          })
    }

  }

  angular
  .module('app')
  .controller('ChildController', ChildController)
}())
