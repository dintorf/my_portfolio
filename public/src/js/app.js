var app = angular.module('PortfolioApp', ['ngRoute','ngResource']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'views/main.html'
		})
		.when('/projects', {
			controller: 'ProjectsController',
			templateUrl: 'views/projects.html'
		})
		.otherwise('/');
	$locationProvider.html5Mode(true);
});