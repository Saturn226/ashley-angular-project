function AuthController($scope, Auth, $state){

  $scope.user = {};

  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('home');
    });
  }

  $scope.register = function(){
    Auth.register($scope.user).then(function(){
      $state.go('home');
    });
  }
}

angular
  .module('app')
  .controller('AuthController', AuthController)