(function(){
  function EventFactory($stateParams, $http, $state){

    return {
      getEvents: getEvents,
      addEvent: addEvent,
      deleteEvent: deleteEvent
    }

    function getEvents(params){
      return $http.get(params)
        .then(handleResponse)
        .catch(handleError)
    }

    function handleResponse(response){
      return response.data
    }

    function handleError(error){
      console.log(error)
    }

    function addEvent(newEvent){
      return $http.post('/children/' + $stateParams.id + '/events', {event: newEvent})
        .catch(handleError)
    }

    function deleteEvent(event){
      return $http.delete('/children/'+ event.child.id +'/events/' + event.id)
        .catch(handleError)
    }

  }

  angular
  .module('app')
  .factory('EventFactory', EventFactory)
}())