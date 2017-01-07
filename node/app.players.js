"use strict";
var app_database_1 = require("./app.database");
var _shared_1 = require("../angular/app/_shared");
var mongodb = require('mongodb');
var util = require('util');
var sha1 = require('sha1');
var PlayerRepository = (function () {
    function PlayerRepository() {
        var _this = this;
        this.settings = null;
        this.handleError = function (err, response, next) {
            response.send(500, err);
            next();
        };
        this.createPlayer = function (request, response, next) {
            if (request.body === undefined) {
                response.send(400, 'No player data');
                return next();
            }
            var player = _shared_1.Player.fromBody(request.body);
            app_database_1.databaseConnection.db.collection('players')
                .insertOne(player)
                .then(function (result) { return _this.returnPlayer(result.insertedId, response, next); })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        this.getAllPlayers = function (request, response, next) {
            app_database_1.databaseConnection.db.collection('players')
                .find()
                .toArray()
                .then(function (players) {
                response.json(players || []);
                next();
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        this.returnPlayer = function (id, response, next) {
            app_database_1.databaseConnection.db.collection('players')
                .findOne({
                _id: id
            })
                .then(function (player) {
                if (player === null) {
                    response.send(404, 'Player not found');
                }
                else {
                    response.json(player);
                }
                next();
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        this.getPlayer = function (request, response, next) {
            var id = new mongodb.ObjectID(request.params.id);
            _this.returnPlayer(id, response, next);
        };
        this.updatePlayer = function (request, response, next) {
            var id = new mongodb.ObjectID(request.params.id);
            var player = request.body;
            if (player === undefined) {
                response.send(400, 'No player data');
                return next();
            }
            delete player._id;
            app_database_1.databaseConnection.db.collection('players')
                .updateOne({
                _id: id
            }, {
                $set: player
            })
                .then(function (result) { return _this.returnPlayer(id, response, next); })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        this.deletePlayer = function (request, response, next) {
            var id = new mongodb.ObjectID(request.params.id);
            app_database_1.databaseConnection.db.collection('players')
                .deleteOne({
                _id: id
            })
                .then(function (result) {
                if (result.deletedCount === 1) {
                    response.json({
                        msg: util.format('Player -%s- Deleted', id)
                    });
                }
                else {
                    response.send(404, 'No player found');
                }
                next();
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        this.getTopVict = function (request, response, next) {
            app_database_1.databaseConnection.db.collection('players')
                .find()
                .sort({ totalVictories: -1 })
                .limit(10)
                .toArray()
                .then(function (players) {
                response.json(players || []);
                _this.settings.wsServer.notifyAll('players', Date.now() + ': Somebody accessed top 10 victories');
                next();
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        this.getTopScore = function (request, response, next) {
            app_database_1.databaseConnection.db.collection('players')
                .find()
                .sort({ totalScore: -1 })
                .limit(10)
                .toArray()
                .then(function (players) {
                response.json(players || []);
                next();
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        // Routes for the games
        this.init = function (server, settings) {
            _this.settings = settings;
            server.post(settings.prefix + 'players', _this.createPlayer); // Sem 'authorize' porque user ainda não está registado
            server.get(settings.prefix + 'players', _this.getAllPlayers);
            server.get(settings.prefix + 'topvict', _this.getTopVict);
            server.get(settings.prefix + 'topscore', _this.getTopScore);
            server.get(settings.prefix + 'players/:id', settings.security.authorize, _this.getPlayer);
            server.put(settings.prefix + 'players/:id', settings.security.authorize, _this.updatePlayer);
            server.del(settings.prefix + 'players/:id', settings.security.authorize, _this.deletePlayer);
            console.log("[node] app.players.ts - Players routes registered");
        };
    }
    return PlayerRepository;
}());
exports.PlayerRepository = PlayerRepository;
