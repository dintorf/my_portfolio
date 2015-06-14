var app = angular.module('PortfolioApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'views/main.html'
		});
	$locationProvider.html5Mode(true);
});