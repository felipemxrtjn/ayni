(function () {
  'use strict';

  angular.module('AyniApp.pages.runa.create')
    .controller('runaCreateCtrl', runaCreateCtrl);

  /** @ngInject */
  function runaCreateCtrl($scope, runaService) {

      $scope.vm = {};
    
      $scope.onBtnCreateRunaClick = function(){
        runaService.createRuna($scope.vm.runa).then(function(){
          $scope.$dismiss();
          //TODO call refresh parent grid
        });
      };

  }

})();
