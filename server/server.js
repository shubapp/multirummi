var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var board = require('./board');

app.use(bodyParser());
app.use(express.static(__dirname + "/../public"));

app.get('/', function(req, res){
  res.redirect('index.html');
});

app.get('*', function(req, res){
	res.redirect('/#' + req.originalUrl);
});

app.listen(80);
board.initBoard();