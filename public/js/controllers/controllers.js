var multiRummi = angular.module('multiRummi.controllers', []);

var controllers = {};

var API_PATH = '/api/';

controllers.playerController = function($scope, $location) {
	$scope.playerDeck = [];
	$scope.stagingTiles=[];

	$scope.joinGame = function() {
		if ($scope.username != "") {
			socket.emit('joinGame', $scope.username);
			$location.url('/player');
		}
	};

	$scope.stageCards = function(){
		// $(".tileContainer.active"). 
		socket.emit('stageCards', $scope.stagingTiles);
		removeTilesFromDeck($scope.stagingTiles, $scope.playerDeck);
		$scope.stagingCards=[];
	};
	
	socket.on('clientTakeCard', function(tiles) {
		$scope.$apply(function(){ 
			$scope.playerDeck = $scope.playerDeck.concat(tiles);
		});
	});
};

controllers.hostController = function($scope, $http, $location) {
	$scope.players = [];
	$scope.stagingTiles = [];
	$scope.boardSets=[];

	$scope.hostGame = function() {
		// $http.post(API_PATH + 'games', {name: $scope.username});
		$location.url('/host');
		socket.emit('hostGame', $scope.username);
	};

	$scope.startGame = function(){
		socket.emit('startGame');
	};

	$scope.takeCard = function(){
		socket.emit('serverTakeCard');
	};

	socket.on('playerJoined', function(username) {
		$scope.players.push(username);
	});

	socket.on('boardStageCards', function(tiles) {
		$scope.$apply(function(){ 
			$scope.stagingTiles = $scope.stagingTiles.concat(tiles);
		});
	});
};

multiRummi.controller(controllers);