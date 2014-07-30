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
};

controllers.hostController = function($scope, $http, $location) {
	$scope.hostGame = function() {
		$http.post(API_PATH + 'games', {name: $scope.username});
		$location.url('/host');
	};
};

multiRummi.controller(controllers);