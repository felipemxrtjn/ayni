/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('AyniApp.pages.ui', [
    'AyniApp.pages.ui.typography',
    'AyniApp.pages.ui.buttons',
    'AyniApp.pages.ui.icons',
    'AyniApp.pages.ui.modals',
    'AyniApp.pages.ui.grid',
    'AyniApp.pages.ui.alerts',
    'AyniApp.pages.ui.progressBars',
    'AyniApp.pages.ui.notifications',
    'AyniApp.pages.ui.tabs',
    'AyniApp.pages.ui.slider',
    'AyniApp.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
