(function(){
  function EventFactory($stateParams, $http){
    vm = this;

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

    // function addEvent(event){
    //   $http.post('/children/' + $stateParams.id + '/events')
    //     .then(handleResponse)
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


    function handleError(error){
      console.log(error)
    }
  }

  angular
  .module('app')
  .factory('EventFactory', EventFactory)
}())