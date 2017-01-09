"use strict";
var app_database_1 = require("./app.database");
var mongodb = require('mongodb');
var util = require('util');
var GameRepository = (function () {
    function GameRepository() {
        var _this = this;
        this.settings = null;
        this.handleError = function (err, response, next) {
            response.send(500, err);
            next();
        };
        this.returnGame = function (id, response, next) {
            app_database_1.databaseConnection.db.collection('games')
                .findOne({
                _id: id
            })
                .then(function (game) {
                if (game === null) {
                    response.send(404, 'Game not found');
                }
                else {
                    response.json(game);
                }
                next();
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        // Vai buscar todos os jogos
        this.getGamesSrv = function (request, response, next) {
            app_database_1.databaseConnection.db.collection('games')
                .find()
                .toArray()
                .then(function (games) {
                response.json(games || []);
                _this.settings.wsServer.actLists('gamesLists', '');
                next();
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        // @request Recebe string com status do jogo *inc
        this.getGamesByStatusSrv = function (request, response, next) {
            if (request.params.status === undefined) {
                response.send(400, 'No Status received');
                return next();
            }
            app_database_1.databaseConnection.db.collection('games')
                .find({ status: request.params.status })
                .toArray()
                .then(function (games) {
                response.json(games || []);
                next();
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        this.getGame = function (request, response, next) {
            var id = new mongodb.ObjectID(request.params.id);
            _this.returnGame(id, response, next);
        };
        this.updateGame = function (request, response, next) {
            var id = new mongodb.ObjectID(request.params.id);
            var game = request.body;
            if (game === undefined) {
                response.send(400, 'No game data');
                return next();
            }
            delete game._id;
            app_database_1.databaseConnection.db.collection('games')
                .updateOne({
                _id: id
            }, {
                $set: game
            })
                .then(function (result) { return _this.returnGame(id, response, next); })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        this.updateGamePlayersCount = function (request, response, next) {
            var playersCount = new mongodb.ObjectID(request.params.playersCount);
            var game = request.body;
            if (game === undefined) {
                response.send(400, 'No game data');
                return next();
            }
            delete game.playersCount;
            app_database_1.databaseConnection.db.collection('games')
                .updateOne({
                playersCount: playersCount
            }, {
                $set: game
            })
                .then(function (result) { return _this.returnGame(playersCount, response, next); })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        this.updateGameSrv = function (request, response, next) {
            var game = request.body;
            if (game === undefined) {
                response.send(400, 'No game data');
                return next();
            }
            var idGame = new mongodb.ObjectID(game._id); // PROF caso a rota não tenha o id
            delete game._id; // PROF para evitar manipulação do _id
            app_database_1.databaseConnection.db.collection('games')
                .updateOne({
                _id: idGame
            }, {
                $set: game
            })
                .then(function (result) { return _this.returnGame(result._id, response, next); })
                .catch(function (err) { return _this.handleError(err, response, next); });
            //console.log(game);
        };
        this.createGameSrv = function (request, response, next) {
            var game = request.body;
            if (game === undefined) {
                response.send(400, 'No game data');
                return next();
            }
            app_database_1.databaseConnection.db.collection('games')
                .insertOne(game)
                .then(function (result) {
                //console.log(this.settings);
                _this.settings.wsServer.notifyAll('games', 'New game created');
                _this.returnGame(result.insertedId, response, next);
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        // Criar board com todas posições vazias ('0')
        /*public createBoardEmpty() {
            for(let i = 0; i < 100; i++) {
                this.board[i] = 0;
            }
            return this.board;
        }*/
        this.joinGameSrv = function (request, response, next) {
            var game = request.body;
            console.log(request);
            if (game === undefined) {
                response.send(400, 'No game data');
                return next();
            }
            /*console.log('antes getGameN');
            getGame(game, response, next);
            console.log('game vindo de getGame(): ' + game); */
            // Verificar se player q está a entrar já se encontra nesse jogo
            /*for (let i = 0; i < game.playersArray.lenght; i++) {
                if (game._id == game.playersArray[i]) {
                    console.log('existe');
                }
                else {
                    console.log('naoooo existe');
                }
            }*/
            var idGame = new mongodb.ObjectID(game._id); // PROF caso a rota não tenha o id
            delete game._id; // PROF para evitar manipulação do _id
            app_database_1.databaseConnection.db.collection('games')
                .updateOne({
                _id: idGame
            }, {
                $set: game
            })
                .then(function (result) {
                //this.returnGame(result._id, response, next)
                // v find
                var id = new mongodb.ObjectID(idGame);
                _this.returnGame(id, response, next);
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
            /*console.log('game - fim ');
            console.log(game);*/
        };
        this.deleteGame = function (request, response, next) {
            var id = new mongodb.ObjectID(request.params.id);
            app_database_1.databaseConnection.db.collection('games')
                .deleteOne({
                _id: id
            })
                .then(function (result) {
                if (result.deletedCount === 1) {
                    response.json({
                        msg: util.format('Game -%s- Deleted', id)
                    });
                }
                else {
                    response.send(404, 'No game found');
                }
                next();
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        // Routes for the games
        this.init = function (server, settings) {
            // sem isto -> erro 500
            _this.settings = settings;
            server.post(settings.prefix + 'games', _this.createGameSrv);
            server.get(settings.prefix + 'games', _this.getGamesSrv);
            server.get(settings.prefix + 'gamesSearch/:status', _this.getGamesByStatusSrv);
            server.get(settings.prefix + 'games/:id', settings.security.authorize, _this.getGame);
            //server.put(settings.prefix + 'games', this.updateGameN);
            //server.put(settings.prefix + 'games', this.updateGamePlayersCountN);
            server.post(settings.prefix + 'game', _this.joinGameSrv);
            server.del(settings.prefix + 'games/:id', settings.security.authorize, _this.deleteGame);
            console.log("[node] app.games.ts - Games routes registered");
        };
    }
    return GameRepository;
}());
exports.GameRepository = GameRepository;
