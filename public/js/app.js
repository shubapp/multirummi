var multiRummi = angular.module('multiRummi', ['multiRummi.controllers', 'ngRoute']);

var socket = io();

multiRummi.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/intro', {
		templateUrl: 'views/intro.html'
	})
	.when('/player', {
		controller: 'playerController',
		templateUrl: 'views/player.html'
	})
	.when('/host', {
		controller: 'hostController',
		templateUrl: 'views/board.html'
	})
	.otherwise({redirectTo: '/intro'});

	$locationProvider.html5Mode(true);
});