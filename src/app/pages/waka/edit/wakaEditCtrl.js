(function () {
  'use strict';

  angular.module('AyniApp.pages.waka.edit')
    .controller('wakaEditCtrl', wakaEditCtrl);
      
  /** @ngInject */
  function wakaEditCtrl($scope, $stateParams, $state, wakaService) {

    $scope.vm = {};

    wakaService.getWakaById($stateParams.id).then(function(data){
        if(data.data){
            if(data.data.alias)
                angular.forEach(data.data.alias, function(value, key) {
                    $('.waka-edit-page .alias-input').tagsinput('add', value);
                });
        }
        $scope.vm.waka = data.data;
    });

    $scope.onBtnUpdateWakaClick = function(){
        $scope.vm.waka.alias = $('.waka-edit-page .alias-input').tagsinput('items');
        wakaService.updateWaka($scope.vm.waka).then(function(data){
            $state.go('waka.view');    
        });
    };

    $scope.onBtnCancelUpdateClick = function(){
        $state.go('waka.view'); 
    };
 
  }//end wakaEditCtrl

})();
