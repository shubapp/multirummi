var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var server = require('http').Server(app);
var io = require('socket.io')(server);

var board = require('./board');

app.use(bodyParser());
app.use(express.static(__dirname + "/../public"));

app.get('/', function(req, res){
  res.redirect('index.html');
});

app.get('*', function(req, res){
	res.redirect('/#' + req.originalUrl);
});

io.sockets.on('connection', function(socket) {
 	console.log('a user connected');
 	socket.on('disconnect', function() {
    	console.log('user disconnected');
	});
});

// app.listen(80);
io.listen(80);
board.initBoard();