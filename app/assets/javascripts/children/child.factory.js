(function(){

  function ChildFactory($http){

    return{
      getChildren :getChildren,
      getChild :getChild,
      createChild :createChild,
      editChild :editChild

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

    function editChild(child){
      return $http.patch('/children/' + child.id, {child: child})
        .then(handleResponse)
        .catch(handleError)
    }

    function createChild(newChild){
      return $http.post('/children', {child: newChild})
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
