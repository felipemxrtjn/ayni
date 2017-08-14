(function () {
  'use strict';

  angular.module('AyniApp.pages.runa.edit', [])
    .config(routeConfig).config(function(){
      
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('runa.edit', {
          url: '/edit/:id',
          templateUrl: 'app/pages/runa/edit/runaEdit.html',
          title: 'Runa Edition'
        //   sidebarMeta: {
        //     order: 300,
        //   }
        });
  }

})();