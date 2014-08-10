var multiRummi = angular.module('multiRummi.directives', []);

var directives = {};

directives.tile=function() {
    return {
        restrict: 'E',
        templateUrl:'views/tile.html',
        replace: true,
		scope: {
			tile: '=ngModel'
		},
        link: function(scope, element, attrs) {
        	$(element).dblclick(function(){
        		if ($(this).hasClass("active")){
        			$(this).removeClass("active");
        			removeTilesFromDeck([scope.tile], scope.$parent.stagingTiles);
        		} else{
        			$(this).addClass("active");
        			scope.$parent.stagingTiles.push(scope.tile);
        		}
        	});
        }
    };
};

directives.tileBack=function() {
    return {
        restrict: 'E',
        templateUrl:'views/tileBack.html',
        replace: true
    };
};

directives.tileSpot=function() {
    return {
        restrict: 'E',
        templateUrl:'views/tileSpot.html',
        replace: true
    };
};

directives.sortable = function() {
	return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	$(element).find(".tileContainer").disableSelection();
        	$(element).sortable({revert: true});
        }
    };
};

directives.draggable = function() {
	return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	$(element).draggable({revert: "invalid"});
        }
    };
};

directives.droppable = function() {
	return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	$(element).droppable({revert: true});
        }
    };
};

multiRummi.directive(directives);