(function () {
  'use strict';

  angular.module('AyniApp.pages.runa.view')
    .controller('runaViewCtrl', runaViewCtrl);
      
  /** @ngInject */
  function runaViewCtrl($scope, $uibModal, $location,baConfig, baUtil, runaService) {
      $scope.runaToolButtons = [{
        title: 'Add',
        text: ')',
        className: 'socicon',
        clickEvent: function(){
          $uibModal.open({
            animation: true,
            templateUrl: 'app/pages/runa/create/runaCreate.html',
            controller: 'runaCreateCtrl',
            size: 'md'
          });
        }
      },{
        title: 'Refresh',
        text: '',
        className: 'ion-refresh',
        clickEvent: function(){
          $scope.refreshRuna();
        }        
      }];

      $scope.refreshRuna = function(){
        $scope.runaList = [];
        runaService.getRunaList().then(function(runaList){
          $scope.runaList = runaList.data.d;
        }); 
      }

     $scope.refreshRuna();


  }

})();
