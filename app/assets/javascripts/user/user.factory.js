(function(){
  function UserFactory($http){
    return {
      getUser :getUser

    }


    function getUser(){
      return $http.get('/users/1')
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
  .factory('UserFactory', UserFactory)
}())