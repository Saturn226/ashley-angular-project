(function(){
  'use strict'


  angular
    .module("app", ['ui.router', 'templates', 'Devise'])
    .config(function($httpProvider) {
          $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
      });
    

    //.controller('ChildController', ChildController)
}());