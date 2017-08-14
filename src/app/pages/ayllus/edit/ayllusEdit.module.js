(function () {
  'use strict';

  angular.module('AyniApp.pages.ayllus.edit', [])
    .config(routeConfig).config(function(){
      
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ayllus.edit', {
          url: '/edit/:id',
          templateUrl: 'app/pages/ayllus/edit/ayllusEdit.html',
          title: 'Ayllu Edition'
        });
  }

})();