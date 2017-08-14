(function () {
  'use strict';

  angular.module('AyniApp.pages.ayllus')
      .service('ayllusService',ayllusService);

  /** @ngInject */
  function ayllusService($http, $q, $resource) {
    return {
        getAyllusList: function(){
            var defer = $q.defer();
            var apiUrl = '';
            var resource = null;
            if(window.ayniConfiguration.apiService.useMockData){
                apiUrl = '/app/pages/ayllus/mock/getAll.json';
                resource = $resource(apiUrl);
                resource.apiCall = resource.get; 
            }
            else {
                apiUrl = window.ayniConfiguration.apiService.apiUrl + 'ayllu/GetAll';
                resource = $resource(apiUrl);
                resource.apiCall = resource.save;//save method makes a post  
            }
            
            resource.apiCall(function(data, headers){
                defer.resolve({
                    data: data
                });
            });          
            return defer.promise;
        },
        getAyllusById: function(id){
            var defer = $q.defer();
            var apiUrl = '';
            var resource = null;
            if(window.ayniConfiguration.apiService.useMockData){
                apiUrl = '/app/pages/ayllus/mock/GetById.json';
                resource = $resource(apiUrl);
                resource.apiCall = resource.get; 
            }
            else {
                apiUrl = window.ayniConfiguration.apiService.apiUrl + 'ayllu/GetById';
                resource = $resource(apiUrl,{id: id});
                resource.apiCall = resource.save;//save method makes a post  
            }
            resource.apiCall(function(data, headers){
                defer.resolve({
                    data: data
                });
            });          
            
            return defer.promise;
        },
        createAyllus: function(ayllu){
            var defer = $q.defer();
            var resource = $resource(window.ayniConfiguration.apiService.apiUrl + 'ayllu/create', ayllu);
            resource.save(function(data, headers){
                defer.resolve({ data: data});
            });
            return defer.promise;
        },
        updateAyllus: function(ayllu){
            var defer = $q.defer();
            var resource = $resource(window.ayniConfiguration.apiService.apiUrl + 'ayllu/update', ayllu);
            resource.save(function(data, headers){
                defer.resolve({ data: data});
            });
            return defer.promise;
        },
        callApi: function(resource, method){
            if(method)
            return resource;
        }
        
    };
  }

})();

