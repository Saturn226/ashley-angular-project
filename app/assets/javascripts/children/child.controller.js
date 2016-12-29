(function(){

  function ChildController(ChildFactory,$stateParams, EditService){

    var vm = this;
    vm.createChild = createChild;
    vm.newChild = {}
    vm.isEnabled = isEnabled();
    vm.enableEditor = enableEditor
    vm.disableEditor = disableEditor
    activate();
    vm.save = save;

    function activate(){
      if ($stateParams.id)
       getChild($stateParams)
      else
       getChildren();
    }

    function enableEditor(){
      return EditService.enableEditor();
    }

    function isEnabled(){

     return EditService.isEnabled;
   }

   function save(){
     //EditService.save();
     vm.disableEditor();
     editChild()
   }


   function disableEditor(){
     return EditService.disableEditor();
   }

    function getChild(){
      return ChildFactory.getChild($stateParams)
        .then(setChild)
    }

    function getChildren(){
      return ChildFactory.getChildren()
        .then(setChildren)
    }

    function editChild(){
        return ChildFactory.editChild(vm.child)
         .then(function(){
           vm.name = vm.child.first_name + " " + vm.child.last_name;
         })
    }

    function setChild(child){
      vm.child = child
      vm.age = child.age
      vm.name = child.name
      vm.class = child.klass
      vm.teacher = child.user
      vm.first_name = child.first_name
      vm.last_name = child.last_name
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
