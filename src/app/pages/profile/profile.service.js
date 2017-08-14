(function () {
    'use strict';

    angular.module('AyniApp.pages.profile')
        .service('profileService', profileService);

    /** @ngInject */
    function profileService($http, $q, $resource) {

        var service = {
            getProfile: getProfile
        };

        return service;

        function getProfile(dummyData) {

            var defer = $q.defer();

            var dummyProfile =
                {
                    "d":
                    [
                        {
                            "id": 1,
                            "name": "Olga Zegarra",
                            "email": "garaloveli@gmail.com",
                            "description": "Developer",
                            "alias": ["Olga", "ozo"],
                            "profileImageUrl": null,
                            "tags": ["dev_olga", "olga"],
                            "ayllu": 1
                        }
                    ]
                };

            if (dummyData) {
                defer.resolve({ data: dummyProfile });
            }
            return defer.promise;
        }

    }

})();