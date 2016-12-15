(function(){

  function ChildFactory($http){

    return{
      getChildren :getChildren,
      getChild :getChild
     
    }

    function getChildren(){
      return $http.get('/children')
        .then(handleResponse)
        .catch(handleError)
    }

     function getChild(params){
      return $http.get('/children/' + params.id)
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
  .factory('ChildFactory', ChildFactory)
}())
