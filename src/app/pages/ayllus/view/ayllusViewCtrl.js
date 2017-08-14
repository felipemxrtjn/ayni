(function () {
  'use strict';

  angular.module('AyniApp.pages.ayllus.view')
    .controller('ayllusViewCtrl', ayllusViewCtrl);
      
  /** @ngInject */
  function ayllusViewCtrl($scope, $uibModal, $location,baConfig, baUtil, ayllusService) {
      $scope.ayllusToolButtons = [{
        title: 'Add',
        text: ')',
        className: 'socicon',
        clickEvent: function(){
          $uibModal.open({
            animation: true,
            templateUrl: 'app/pages/ayllus/create/ayllusCreate.html',
            controller: 'ayllusCreateCtrl',
            size: 'md'
          });
        }
      },{
        title: 'Refresh',
        text: '',
        className: 'ion-refresh',
        clickEvent: function(){
          $scope.refreshAyllus();
        }        
      }];

      $scope.refreshAyllus = function(){
        $scope.ayllusList = [];
        ayllusService.getAyllusList().then(function(ayllusList){
          $scope.ayllusList = ayllusList.data.d;
        }); 
      }

     $scope.refreshAyllus();
  }

})();
