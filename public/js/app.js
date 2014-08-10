var multiRummi = angular.module('multiRummi', ['multiRummi.controllers', 'ngRoute', 'multiRummi.directives']);

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


function removeTilesFromDeck(tiles, deck){
	for (var tileIndex = 0; tileIndex < deck.length; tileIndex++) {
		for (var removableTileIndex = 0; removableTileIndex < tiles.length; removableTileIndex++) {
			if ((deck[tileIndex].number == tiles[removableTileIndex].number) && 
				(deck[tileIndex].color == tiles[removableTileIndex].color)) {
				deck.splice(tileIndex,1);
				tiles.splice(removableTileIndex,1);
				tileIndex--;
				break;
			}
		}
	}
}