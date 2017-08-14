(function () {
  'use strict';

  angular.module('AyniApp.pages.waka.view', [])
    .config(routeConfig).config(function(){
      
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('waka.view', {
          url: '/view',
          templateUrl: 'app/pages/waka/view/wakaView.html',
          title: 'Waka'
        });
  }

})();