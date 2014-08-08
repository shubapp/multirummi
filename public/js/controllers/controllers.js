var multiRummi = angular.module('multiRummi.controllers', []);

var controllers = {};

var API_PATH = '/api/';

controllers.playerController = function($scope, $location) {
	$scope.playerDeck = [];

	$scope.joinGame = function() {
		if ($scope.username != "") {
			socket.emit('joinGame', $scope.username);
			$location.url('/player');
		}
	};
	
	socket.on('clientTakeCard', function(tiles) {
		$scope.$apply(function(){ 
			$scope.playerDeck = $scope.playerDeck.concat(tiles);
		});
	});

	$scope.takeCard = function(){
		socket.emit('serverTakeCard');
	};
};

controllers.hostController = function($scope, $http, $location) {
	$scope.players = [];

	$scope.hostGame = function() {
		// $http.post(API_PATH + 'games', {name: $scope.username});
		$location.url('/host');
		socket.emit('hostGame', $scope.username);
	};

	$scope.startGame = function(){
		socket.emit('startGame');
	};

	socket.on('playerJoined', function(username) {
		$scope.players.push(username);
	});
};

multiRummi.controller(controllers);