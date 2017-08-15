
(function () {
  'use strict';
  angular.module('AyniApp.pages')
      .service('authentication_service', authentication_service);
  
  function authentication_service() {      
      return {
          get_user:function(){
              var user = JSON.parse(sessionStorage.getItem("ayni:user"))
              return user;
          }
      };
  }
})();
