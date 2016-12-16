// activity.factory.js
(function() {
    function ActivityFactory($http) {
        return {
          getActivities :getActivities
        }

        function getActivities(params){
          return $http.get('/activities')
            .then(handleResponse)
            .catch(handleError)
        }

        function handleResponse(response){
          return response.data
        }

        function handleError(error){
          console.log(error)
        }
    }

    angular
        .module('app')
        .factory('ActivityFactory', ActivityFactory)
}())