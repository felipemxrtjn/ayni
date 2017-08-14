(function () {
  'use strict';

  angular.module('AyniApp.pages.ayllus.create')
    .controller('ayllusCreateCtrl', ayllusCreateCtrl);

  /** @ngInject */
  function ayllusCreateCtrl($scope, ayllusService) {

      $scope.vm = {};
    
      $scope.onBtnCreateAyllusClick = function(){
        ayllusService.createAyllus($scope.vm.ayllus).then(function(){
          $scope.$dismiss();
          //TODO call refresh parent grid
        });
      };

  }

})();
