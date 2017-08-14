(function () {
  'use strict';

  angular.module('AyniApp.pages.runa', ['AyniApp.pages.runa.view','AyniApp.pages.runa.create','AyniApp.pages.runa.edit'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('runa', {
          url: '/runa',
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'Runa',
          controller: function($state){
            $state.go('runa.view'); 
          },
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 151,
          }
        });
  }

})();
