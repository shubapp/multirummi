// module.exports = function() {
	var tileDeck = [];
	var tilesColors = ["black", "blue", "red", "yellow"];
	var board = [];
	var players = [];
	var currPlayer;

	exports.initBoard = function () {
		for (var deckCount = 0; deckCount < 2; deckCount++) {
			for (var deckColor = 0; deckColor < 4; deckColor++) {
				for (var tileCount = 1; tileCount <= 13; tileCount++) {
					tileDeck.push({number: tileCount, color: tilesColors[deckColor]});
				}
			}
		}

		tileDeck.push({number: 0, color: tilesColors[0]});
		tileDeck.push({number: 0, color: tilesColors[2]});

		console.log(tileDeck);

		this.shuffleDeck(tileDeck);
		
		console.log(tileDeck);
	}

	exports.shuffleDeck = function (deck) {
		for (var n = deck.length, k, x; 1 < n;) {
			k = Math.floor(Math.random() * n--);
			x = deck[n];
			deck[n] = deck[k];
			deck[k] = x;
		}
	}

	function dealTiles() {

	}

	function validateBoard(board) {

	}
// }();