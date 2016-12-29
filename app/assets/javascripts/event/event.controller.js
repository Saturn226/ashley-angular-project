(function(){
   'use strict'
  function EventController(EventFactory, $stateParams, ActivityFactory, $state){

    var vm = this
    vm.newEvent = {}
    vm.addEvent = addEvent
    vm.deleteEvent = deleteEvent
    vm.childExists = false
    //var time = "2016-12-22T00:09:57.013Z"
    var time = ("dddd, MMMM Do YYYY, h:mm:ss a")

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

    function deleteEvent(event){
      return EventFactory.deleteEvent(event)
        .then(vm.events.splice(vm.events.indexOf(event),1))
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
