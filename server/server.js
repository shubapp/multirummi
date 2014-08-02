var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var server = require('http').Server(app);
var io = require('socket.io')(server);

var board = require('./board');

var API_PATH = '/api/';

var playersSockets = [];
var games = [];
var currTurn=0;

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));

app.get('/', function(req, res){
	res.redirect('index.html');
});

app.get('*', function(req, res){
	res.redirect('/#' + req.originalUrl);
});

app.post(API_PATH + 'games', function(req, res){
	games.push(req.body.name);
});

server.listen(80);

io.sockets.on('connection', function(socket) {
 	socket.on('startGame', function() {
		board.initBoard();
 	});

 	socket.on('joinGame', function(username) {
 		playersSockets.push({name: username, socket: socket});
 		console.log(username + " joined game");
 	});

 	socket.on('takeCard', function() {
 		playersSockets[currTurn].emit('takeCard',board.drawTile());
 	});
 	
 	socket.on('disconnect', function() {
    	console.log('user disconnected');
	});
});