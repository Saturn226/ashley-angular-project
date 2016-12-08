(function(){
  'use strict'

  function UserFactory($http){
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

     function getUser(user, Auth){
      
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
    .factory('UserFactory', UserFactory);




}());