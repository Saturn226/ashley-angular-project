(function(){

  'use strict'



  function EventController(ChildFactory,$stateParams, $http, $log, $scope){
    var vm = this
    vm.newEvent = {};
    vm.addEvent = addEvent;

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


    function addEvent(newEvent){
      var req = {
        method: 'POST',
        url: 'children/' + vm.child.id +'/events/',
        headers: {
          'Content-Type': 'application/json'
        },
        data:{ event: newEvent }
      }
      return $http(req).catch(handleError)
    }


      function handleResponse(response) {
            return response.data
        }

        function handleError(error) {
            console.log(error);
        }


  }

  
  angular
    .module('app')
    .controller('EventController', EventController)


}());