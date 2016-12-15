'use strict';

var mongodb = require('mongo_game');
var MongoClient = mongo_game.MongoClient;

var db = module.exports = {};

db.connect = function (url, callback){
	MongoClient.connect(url, function (err, database) {
	  	if(err) throw err;
	  	console.log('Connection established to', url);
	  	db.db = database;
		callback();
	});
}

