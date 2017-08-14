(function () {
  'use strict';

  angular.module('AyniApp.pages.ayllus.view', [])
    .config(routeConfig).config(function(){
      
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ayllus.view', {
          url: '/view',
          templateUrl: 'app/pages/ayllus/view/ayllusView.html',
          title: 'Ayllu'
        });
  }

})();