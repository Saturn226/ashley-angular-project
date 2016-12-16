(function(){
  function EventController(EventFactory,$http, $stateParams){
    'use strict'
    vm = this

    activate();

    function activate(){
      if($stateParams.id)
        getEvents('/children/' + $stateParams.id + '/events')
      else
        getEvents('/events')
    }

    function getEvents(params){
      return EventFactory.getEvents(params)
        .then(setEvents)
    }

    function setEvents(data){
      vm.events = data
    }

    function addEvent(event){
      return EventFactory.addEvent()
    }
  }

  angular
  .module('app')
  .controller('EventController', EventController)
}())