(function () {
  'use strict';

  angular.module('AyniApp.pages.ayllus', ['AyniApp.pages.ayllus.view','AyniApp.pages.ayllus.create','AyniApp.pages.ayllus.edit'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ayllus', {
          url: '/ayllus',
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'Ayllu',
          controller: function($state){
            $state.go('ayllus.view'); 
          },
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 150
          }
        });
  }

})();
