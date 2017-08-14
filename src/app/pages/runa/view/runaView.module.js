(function () {
  'use strict';

  angular.module('AyniApp.pages.runa.view', [])
    .config(routeConfig).config(function(){
      
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('runa.view', {
          url: '/view',
          templateUrl: 'app/pages/runa/view/runaView.html',
          title: 'Runa'
        });
  }

})();