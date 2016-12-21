(function(){
  function ActivityNameFilter(){
  
    return function(arr, activity){

        if (!activity){
          return arr;
        }
        var result = []
        angular.forEach(arr, function(event){
          console.log(activity)
          
          if (event.activity.id === activity)
            result.push(event)
        })
        return result;
        
      }
    }

  angular
  .module('app')
  .filter('ActivityNameFilter', ActivityNameFilter)
}())