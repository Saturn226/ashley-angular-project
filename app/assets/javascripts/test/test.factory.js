(function(){
  'use strict'

  function TestFactory($http, Auth){
    return{
      getUsers: getUsers,
      getUser: getUser,
      createUser: createUser,
      updateUser: updateUser,
      deleteUser: deleteUser
    }

    function getUsers(){
      return $http.get('/users')
          .then(handleResponse)
          .catch(handleError)

    }

    function getUser(){
      Auth.currentUser().then(function(user){
        return user;
    });
      
    }

     function createUser(){

    }

     function updateUser(){

    }

    function deleteUser(){

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
    .factory('TestFactory', TestFactory);




}());