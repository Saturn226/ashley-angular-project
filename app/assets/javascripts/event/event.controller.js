(function(){
   'use strict'
  function EventController(EventFactory, $stateParams, ActivityFactory, $state){
   
    var vm = this
    vm.newEvent = {}
    vm.addEvent = addEvent
    vm.childExists = false

    activate();

    function activate(){
      if($stateParams.id){
        vm.childExists = true;
        getEvents('/children/' + $stateParams.id + '/events')
      }
      else
        getEvents('/events')
      getActivities()
    }

    function getEvents(params){
      return EventFactory.getEvents(params)
        .then(setEvents)
    }

    function setEvents(data){
      vm.events = data
    }

    function addEvent(event){
        return EventFactory.addEvent(event)
          .then(function(response){
            vm.events.push(response.data)
          }) 
    }

    function getActivities(){
      return ActivityFactory.getActivities()
        .then(setActivities)
    }

    function setActivities(data){
      vm.activities = data
    }
  }

  angular
  .module('app')
  .controller('EventController', EventController)
}())