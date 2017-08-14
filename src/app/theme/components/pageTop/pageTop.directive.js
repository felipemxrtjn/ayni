/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('AyniApp.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html',
      controller: function () {
          $('.signout').on('click', function () {
            window.AuthManager.signoutRedirect()
                  .catch(function (error) {
                      console.error('error while signing out user', error);
                  });
          });
      }
    };
  }
})();