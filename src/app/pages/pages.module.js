/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('AyniApp.pages', [
    'ui.router',
    'AyniApp.pages.welcome',
    'AyniApp.pages.dashboard',
    'AyniApp.pages.ui',
    'AyniApp.pages.components',
    'AyniApp.pages.form',
    'AyniApp.pages.tables',
    'AyniApp.pages.charts',
    'AyniApp.pages.maps',
    'AyniApp.pages.profile',
    'AyniApp.pages.ayllus',
    'AyniApp.pages.runa',
    'AyniApp.pages.waka'
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/welcome');

    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'User Profile',
        stateRef: 'profile'
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
    baSidebarServiceProvider.addStaticItem({
      title: 'Menu Level 1',
      icon: 'ion-ios-more',
      subMenu: [{
        title: 'Menu Level 1.1',
        disabled: true
      }, {
        title: 'Menu Level 1.2',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          disabled: true
        }]
      }]
    });
  }

})();
