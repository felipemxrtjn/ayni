/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('AyniApp.theme')
      .factory('baPanel', baPanel);

  /** @ngInject */
  function baPanel() {

    /** Base baPanel directive */
    return {
      restrict: 'A',
      transclude: true,
      scope: {
          baPanelToolbarItems: '=',
          action: '&'
      },     
      template: function(elem, attrs) {
        var res = '<div class="panel-body" ng-transclude></div>';
        if (attrs.baPanelTitle) {
          var titleTpl = '<div class="panel-heading clearfix">'+
                            '<h3 class="panel-title">' + 
                                attrs.baPanelTitle +
                                '<div class="pull-right icons-list danger">'+
                                  '<i ng-repeat="toolItem in baPanelToolbarItems" ng-click="toolItem.clickEvent()" title="{{toolItem.title}}" style="margin-right: 10px;" class="{{toolItem.className}}">'+
                                    '{{ toolItem.text}}'+
                                  '</i>'+
                                '</div>'+
                            '</h3>'
                          +'</div>';
          res = titleTpl + res; // title should be before
        }

        return res;
      }
    };
  }

})();
