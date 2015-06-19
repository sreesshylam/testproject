/**=========================================================
 * Module: VectorMapController.js
 * jVector Maps support
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('project')
        .controller('addprojectController', addprojectController);

    /* @ngInject */
    function addprojectController($scope,$window,$localStorage, $rootScope,$state) {
      var vm = this;
      $scope.saved = localStorage.getItem('blogdata');
      $scope.blogdata = (localStorage.getItem('blogdata')!==null) ? JSON.parse($scope.saved) : [];
      $rootScope.totalEl=0;
      // if(!$window.localStorage.totalElements){
      // 	$rootScope.totalEl = parseInt($window.localStorage.totalElements);
      // }
      // else{
      // 	$window.localStorage.totalElements=0;
      // }

      $scope.modalAdd = function(formitem)
      {
		$rootScope.totalEl +=1;
		$window.localStorage.totalElements=$rootScope.totalEl;
      	$scope.blogdata.push({
      		//index:$rootScope.totalEl,
      		title: formitem.title,
      		des: formitem.des,
			done: false
		});
		$scope.formitem = ''; //clear the input after adding
		localStorage.setItem('blogdata', JSON.stringify($scope.blogdata));
      	//$window.localStorage.data1 = JSON.stringify(formitem);
      	$state.go('list');

      }
  }

      addprojectController.$inject = ['$scope','$window','$localStorage', '$rootScope','$state'];

})();
      