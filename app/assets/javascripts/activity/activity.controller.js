
(function() {
    'use strict'

    function ActivityController(ActivityFactory) {
        var vm = this

        activate();

        function activate(){
          return getActivities()
        }

        function getActivities(){
          return ActivityFactory.getActivities()
             .then(setActivities)
        }

        function setActivities(data){
          vm.activities = data
        }
    }

    angular
        .module('app')
        .controller('ActivityController', ActivityController)
}())