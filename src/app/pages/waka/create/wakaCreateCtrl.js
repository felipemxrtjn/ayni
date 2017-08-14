(function () {
  'use strict';

  angular.module('AyniApp.pages.waka.create')
    .controller('wakaCreateCtrl', wakaCreateCtrl);

  /** @ngInject */
  function wakaCreateCtrl($scope, wakaService) {

      $scope.vm = {};
    
      $scope.onBtnCreateWakaClick = function(){
        wakaService.createWaka($scope.vm.waka).then(function(){
          $scope.$dismiss();
          //TODO call refresh parent grid
        });
      };

  }

})();
