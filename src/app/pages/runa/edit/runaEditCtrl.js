(function () {
  'use strict';

  angular.module('AyniApp.pages.runa.edit')
    .controller('runaEditCtrl', runaEditCtrl);
      
  /** @ngInject */
  function runaEditCtrl($scope, $stateParams, $state, runaService) {

    $scope.vm = {};

    runaService.getRunaById($stateParams.id).then(function(data){
        if(data.data.runa){
            if(data.data.runa.tags)
                angular.forEach(data.data.runa.tags, function(value, key) {
                    $('.runa-edit-page .tag-input').tagsinput('add', value);
                });
            if(data.data.runa.alias)
                angular.forEach(data.data.runa.alias, function(value, key) {
                    $('.runa-edit-page .alias-input').tagsinput('add', value);
                });
        }
        $scope.vm.runa = data.data.runa;
    });

    $scope.onBtnUpdateRunaClick = function(){
        $scope.vm.runa.alias = $('.runa-edit-page .alias-input').tagsinput('items');
        $scope.vm.runa.tags = $('.runa-edit-page .tag-input').tagsinput('items');
        runaService.updateRuna($scope.vm.runa).then(function(data){
            $state.go('runa.view');    
        });
    };

    $scope.onBtnCancelUpdateClick = function(){
        $state.go('runa.view'); 
    };
 
  }//end runaEditCtrl

})();
