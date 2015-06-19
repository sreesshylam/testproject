/**=========================================================
 * Module: VectorMapController.js
 * jVector Maps support
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('project')
        .controller('ApidataController', ApidataController);

    /* @ngInject */
    function ApidataController($scope,$http,apiService) {
      var vm = this;
     
     $scope.submitdata = function(data)
     {
        $scope.details =[];
       apiService.getall(data)
                    .then(function(response) {
                     // console.log(response.data);
                      angular.forEach(response.data.Search,function(value,key)
                      {
                       // console.log(value);
                       // $scope.details = value;
                      var dataval =  apiService.getdetails(value.imdbID)
                       .then(function(response1) {
                     // console.log(response1.data);
                     $scope.details.push(response1.data);
                      //dataval = response1.data;
                    });
                       //console.log(dataval);
                      
                      });
                      // console.log(dataval);
                      //  $scope.details = dataval;
                     
                    });

     };

 
    }

      ApidataController.$inject = ['$scope','$http','apiService'];

})();
      

