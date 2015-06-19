(function() {
    'use strict';

    angular
        .module('project')
        .controller('EditController', EditController);

    function EditController($stateParams, $scope, $window,$localStorage,$state){
    	$scope.saved = localStorage.getItem('blogdata');
      	$scope.blogdata = (localStorage.getItem('blogdata')!==null) ? JSON.parse($scope.saved) : [];
    	$scope.currentParameter = $stateParams.id;
    	var data = JSON.parse($window.localStorage.blogdata);
    	//console.log(data[0]);
    	$scope.title = data[$scope.currentParameter].title;
    	$scope.des = data[$scope.currentParameter].des;
    	$scope.done = data[$scope.currentParameter].done;
    	$scope.editdata = function(index)
    	{
			$scope.blogdata.splice(index, 1);
			$scope.blogdata.splice(index, 0,{
			title: $scope.title,
			des: $scope.des,
			done: $scope.done
			});
			$scope.formitem = ''; //clear the input after adding
			localStorage.setItem('blogdata', JSON.stringify($scope.blogdata));
			$state.go('list');
    	}


    };
     EditController.$inject = ['$stateParams', '$scope', '$window','$localStorage','$state'];

 })();