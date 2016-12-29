(function(){
  function EditService(){

    return {
      enableEditor: enableEditor,
      disableEditor: disableEditor,
      isEnabled: isEnabled,
    }

     var editorEnabled = false;

    function enableEditor(item) {
       editorEnabled = true;
     };

     function disableEditor(item) {
       editorEnabled = false;
     };
    function isEnabled(){
      return editorEnabled;
    }
  }

  angular
  .module('app')
  .service('EditService', EditService)


}())
