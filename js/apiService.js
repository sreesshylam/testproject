(function() {
    'use strict';
    angular
        .module('project')
        .factory('apiService', apiService);

    function apiService($http){
    	var apiData = {};

    	apiData.getall = function(data){
    		return $http({
                        method: 'GET',
                        url: 'http://www.omdbapi.com/',
                        params: {
                            s: data.title,
                            y: data.year,
                            plot: data.plot,
                            r: 'json',
                        }
                    });
    	};
        apiData.getdetails = function(id){
         return $http({
                        method: 'GET',
                        url: 'http://www.omdbapi.com/',
                        params: {
                            i: id,
                            plot: 'short',
                            r: 'json',
                        }
                    });
     };

      
        return apiData;
    }
    apiService.$inject = ['$http'];

})();