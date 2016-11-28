(function(){
  'use strict'

  function ChildFactory($http){
    return{
      getChildren: getChildren,
      getChild: getChild,
      createChild: createChild,
      updateChild: updateChild,
      deleteChild: deleteChild
    }

    function getChildren(){
      return $http.get('/children')
          .then(handleResponse)
          .catch(handleError)

    }

     function getChild(){

    }

     function createChild(){

    }

     function updateChild(){

    }

    function deleteChild(){

    }


    function handleResponse(response){
      console.log(response)
      return response.data
    }

    function handleError(error){
      console.log(error)
    }
  }

  angular
    .module('app')
    .factory('ChildFactory', ChildFactory);




}());