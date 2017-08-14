(function () {
  'use strict';

  angular.module('AyniApp.pages.waka', ['AyniApp.pages.waka.view','AyniApp.pages.waka.create','AyniApp.pages.waka.edit'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('waka', {
          url: '/waka',
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'Waka',
          controller: function($state){
            $state.go('waka.view'); 
          },
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 153
          }
        });
  }

})();
