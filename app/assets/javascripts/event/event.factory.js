(function(){
  function EventFactory($stateParams, $http){
    vm = this;

    return {
      getEvents: getEvents
    }

    function getEvents(params){
      $http.get(params)
        .then(handleResponse)
        .catch(handleError)
    }

    function handleRespone(response){
      return response.data
    }

    function handleError(error){
      console.log(error)
    }
  }

  angular
  .module('app')
  .factory('EventFactory', EventFactory)
}())