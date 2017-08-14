(function () {
  'use strict';

  angular.module('AyniApp.pages.waka.edit', [])
    .config(routeConfig).config(function(){
      
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('waka.edit', {
          url: '/edit/:id',
          templateUrl: 'app/pages/waka/edit/wakaEdit.html',
          title: 'Waka Edition'
        });
  }

})();