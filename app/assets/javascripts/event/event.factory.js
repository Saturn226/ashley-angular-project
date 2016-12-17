(function(){
  function EventFactory($stateParams, $http){

    return {
      getEvents: getEvents,
      addEvent: addEvent
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

    // function addEvent(params){
    //   $http.post('/children/' + $stateParams.id + '/events', data)
    //     .then(console.log(data))
    //     .catch(handleError)
    // }

      function addEvent(newEvent){
      var req = {
        method: 'POST',
        url: 'children/' + $stateParams.id +'/events',
        headers: {
          'Content-Type': 'application/json'
        },
        data:{ event: newEvent }
      }
      return $http(req).catch(handleError)
    }
  }

  angular
  .module('app')
  .factory('EventFactory', EventFactory)
}())