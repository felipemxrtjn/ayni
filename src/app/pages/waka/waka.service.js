(function () {
  'use strict';

  angular.module('AyniApp.pages.waka')
      .service('wakaService',wakaService);

  /** @ngInject */
  function wakaService($http, $q, $resource) {
    return {
        getWakaList: function(){
            var defer = $q.defer();
            var apiUrl = '';
            var resource = null;
            if(window.ayniConfiguration.apiService.useMockData){
                apiUrl = '/app/pages/waka/mock/getAll.json';
                resource = $resource(apiUrl);
                resource.apiCall = resource.get; 
            }
            else {
                apiUrl = window.ayniConfiguration.apiService.apiUrl + 'waka/GetAll';
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
        getWakaById: function(id){
            var defer = $q.defer();
            var apiUrl = '';
            var resource = null;
            if(window.ayniConfiguration.apiService.useMockData){
                apiUrl = '/app/pages/waka/mock/GetById.json';
                resource = $resource(apiUrl);
                resource.apiCall = resource.get; 
            }
            else {
                apiUrl = window.ayniConfiguration.apiService.apiUrl + 'waka/GetById';
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
        createWaka: function(ayllu){
            var defer = $q.defer();
            var resource = $resource(window.ayniConfiguration.apiService.apiUrl + 'waka/create', ayllu);
            resource.save(function(data, headers){
                defer.resolve({ data: data});
            });
            return defer.promise;
        },
        updateWaka: function(ayllu){
            var defer = $q.defer();
            var resource = $resource(window.ayniConfiguration.apiService.apiUrl + 'waka/update', ayllu);
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

