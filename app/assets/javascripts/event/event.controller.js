(function(){

  'use strict'



  function EventController(ChildFactory,$stateParams, $http, $log, $scope){
    var vm = this

    activate();

    function activate(){
      if ($stateParams.id)
       getChild($stateParams)
    }

     function getChild(){
      return ChildFactory.getChild($stateParams)
        .then(setChild)
    }


    function setChildren(data){
      return vm.children = data
    }

    function setChild(data){
      return vm.child = data
    }



  }

  
  angular
    .module('app')
    .controller('EventController', EventController)


}());