(function(){
  function EventController(EventFactory,$http, $stateParams, ActivityFactory, $state, $scope){
    'use strict'
    var vm = this
    vm.newEvent = {}
    vm.addEvent = addEvent

    activate();

    function activate(){
      if($stateParams.id)
        getEvents('/children/' + $stateParams.id + '/events')
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
      }
        //.then($state.go('home.child.events'))
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