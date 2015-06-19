/**=========================================================
 * Module: VectorMapController.js
 * jVector Maps support
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('project')
        .controller('listprojectController', listprojectController);

    /* @ngInject */
    function listprojectController($scope,$window,$localStorage) {
      var vm = this;
      $scope.saved = localStorage.getItem('blogdata');
      $scope.blogdata = (localStorage.getItem('blogdata')!==null) ? JSON.parse($scope.saved) : [];
      $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.blogdata, function(todo){
      count+= todo.done ? 0 : 1;
      });
      return count;
      };

      $scope.change_done = function(val,formitem)
      {
        $scope.blogdata.splice(val, 1);
        $scope.blogdata.splice(val, 0,{
        title: formitem.title,
        des: formitem.des,
        done: formitem.done
        });
        $scope.formitem = ''; //clear the input after adding
        localStorage.setItem('blogdata', JSON.stringify($scope.blogdata));
      };
      $scope.removeall = function() {
        var oldTodos = $scope.blogdata;
        $scope.blogdata = [];
        angular.forEach(oldTodos, function(todo){
        if (!todo.done)
        $scope.blogdata.push(todo);
        });
        localStorage.setItem('blogdata', JSON.stringify($scope.blogdata));
      };

      $scope.edit_blog=function(index)
      {
        // alert(index);
        angular.forEach($scope.blogdata, function(data){
          console.log(data);
        });


      };

    }

      listprojectController.$inject = ['$scope','$window','$localStorage'];

})();

