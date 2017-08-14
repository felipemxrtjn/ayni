'use strict';

angular.module('AyniAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',
  'AyniApp.theme',
  'AyniApp.pages',
  'ngResource'
]).config(['$httpProvider', function($httpProvider) {
  //$httpProvider.defaults.withCredentials = true;
}]);