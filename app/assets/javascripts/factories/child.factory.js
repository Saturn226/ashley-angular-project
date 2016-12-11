(function(){
  'use strict'

  function ChildFactory($http){
    return{
      getChildren: getChildren,
      getChild: getChild,
      createChild: createChild,
      updateChild: updateChild,
      deleteChild: deleteChild,
      //getEvents: getEvents
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

    function getEvents(){

    }


    function createChild(){

    }

     function updateChild(){

    }

    function deleteChild(){

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
    .factory('ChildFactory', ChildFactory);




}());