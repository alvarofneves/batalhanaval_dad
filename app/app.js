const restify = require('restify');
// Connection URL
const url = 'mongodb://localhost:27017/db_battlefield_game';		// 27017 - default port
const server = restify.createServer();

restify.CORS.ALLOW_HEADERS.push("content-type");
server.use( restify.bodyParser() );
server.use( restify.queryParser() );
server.use( restify.CORS() );
server.use( restify.fullResponse() );

// URL base Rest Api endpoints = /api/v1
const database = require('./app.database');
const players = require('./app.players');
const games = require('./app.games');

players.init(server, '/api/v1/');
games.init(server, '/api/v1/');
database.connect(url, function () {
	server.listen(7777, function () {
	    console.log('%s listening at %s', server.name, server.url);
	});
});