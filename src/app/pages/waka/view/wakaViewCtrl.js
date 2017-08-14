(function () {
  'use strict';

  angular.module('AyniApp.pages.waka.view')
    .controller('wakaViewCtrl', wakaViewCtrl);
      
  /** @ngInject */
  function wakaViewCtrl($scope, $uibModal, $location,baConfig, baUtil, wakaService) {
      $scope.wakaToolButtons = [{
        title: 'Add',
        text: ')',
        className: 'socicon',
        clickEvent: function(){
          $uibModal.open({
            animation: true,
            templateUrl: 'app/pages/waka/create/wakaCreate.html',
            controller: 'wakaCreateCtrl',
            size: 'md'
          });
        }
      },{
        title: 'Refresh',
        text: '',
        className: 'ion-refresh',
        clickEvent: function(){
          $scope.refreshWaka();
        }        
      }];

      $scope.refreshWaka = function(){
        $scope.wakaList = [];
        wakaService.getWakaList().then(function(wakaList){
          $scope.wakaList = wakaList.data.d;
        }); 
      }

     $scope.refreshWaka();
  }

})();
