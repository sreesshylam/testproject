(function() {
    'use strict';

    angular
        .module('project')
        .config(routesConfig);

    routesConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    function routesConfig($locationProvider, $stateProvider, $urlRouterProvider)
    {
    	$urlRouterProvider.otherwise("/list");
    	  $stateProvider
			.state('list', {
			url: "/list",
			templateUrl: "pages/list.html",
			controller: 'listprojectController as listctrl'
			})
			.state('add', {
			url: "/add",
			templateUrl: "pages/add.html",
			controller: 'addprojectController as addctrl'
			})
			.state('edit', {
			url: "/edit/:id",
			templateUrl: "pages/edit.html",
			controller: 'EditController'
			})
			.state('apidata', {
			url: "/apidata",
			templateUrl: "pages/apidata.html",
			controller: 'ApidataController as apictrl'
			})

			
			
    }
})();
