(function () {
  'use strict';

  angular.module('AyniApp.pages.runa')
      .service('runaService',runaService);

  /** @ngInject */
  function runaService($http, $q, $resource) {
    return {
        getRunaList: function(){
            var defer = $q.defer();
            var apiUrl = '';
            var resource = null;
            if(window.ayniConfiguration.apiService.useMockData){
                apiUrl = '/app/pages/runa/mock/getAll.json';
                resource = $resource(apiUrl);
                resource.apiCall = resource.get; 
            }
            else {
                apiUrl = window.ayniConfiguration.apiService.apiUrl + 'runa/GetAll';
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
        getRunaById: function(id){
            var defer = $q.defer();
            var apiUrl = '';
            var resource = null;
            if(window.ayniConfiguration.apiService.useMockData){
                apiUrl = '/app/pages/runa/mock/GetById.json';
                resource = $resource(apiUrl);
                resource.apiCall = resource.get; 
            }
            else {
                apiUrl = window.ayniConfiguration.apiService.apiUrl + 'runa/GetById';
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
        createRuna: function(runa){
            var defer = $q.defer();
            var resource = $resource(window.ayniConfiguration.apiService.apiUrl + 'runa/create', runa);
            resource.save(function(data, headers){
                defer.resolve({ data: data});
            });
            return defer.promise;
        },
        updateRuna: function(runa){
            var defer = $q.defer();
            var resource = $resource(window.ayniConfiguration.apiService.apiUrl + 'runa/update', runa);
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

