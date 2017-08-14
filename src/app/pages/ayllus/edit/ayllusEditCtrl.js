(function () {
  'use strict';

  angular.module('AyniApp.pages.ayllus.edit')
    .controller('ayllusEditCtrl', ayllusEditCtrl);
      
  /** @ngInject */
  function ayllusEditCtrl($scope, $stateParams, $state, ayllusService) {

    $scope.vm = {};

    ayllusService.getAyllusById($stateParams.id).then(function(data){
        if(data.data){
            if(data.data.alias)
                angular.forEach(data.data.alias, function(value, key) {
                    $('.ayllus-edit-page .alias-input').tagsinput('add', value);
                });
        }
        $scope.vm.ayllus = data.data;
    });

    $scope.onBtnUpdateAyllusClick = function(){
        $scope.vm.ayllus.alias = $('.ayllus-edit-page .alias-input').tagsinput('items');
        ayllusService.updateAyllus($scope.vm.ayllus).then(function(data){
            $state.go('ayllus.view');    
        });
    };

    $scope.onBtnCancelUpdateClick = function(){
        $state.go('ayllus.view'); 
    };
 
  }//end ayllusEditCtrl

})();
