var multiRummi = angular.module('multiRummi.controllers', []);

var controllers = {};

var API_PATH = '/api/';

controllers.playerController = function($scope, $location) {
	$scope.joinGame = function() {
		if ($scope.username != "") {
			socket.emit('joinGame', $scope.username);
			$location.url('/player');
		}
	};
	$scope.playerDeck = [{number:1, color:"black"},{number:2, color:"blue"},{number:3, color:"red"},{number:10, color:"yellow"},
						 {number:0, color:"black"},{number:12, color:"blue"},{number:9, color:"yellow"},{number:11, color:"blue"},
						 {number:2, color:"yellow"},{number:5, color:"red"},{number:6, color:"black"},{number:7, color:"black"},{number:7, color:"black"},{number:7, color:"black"},{number:7, color:"black"},{number:7, color:"black"},{number:7, color:"black"},{number:7, color:"black"},{number:7, color:"black"},{number:7, color:"black"}];
};

controllers.hostController = function($scope, $http, $location) {
	$scope.hostGame = function() {
		$http.post(API_PATH + 'games', {name: $scope.username});
		$location.url('/host');
	};
};

multiRummi.controller(controllers);