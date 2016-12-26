var mongodb = require('mongodb');
var database = require('./db_battlefield_game');
const util = require('util');

var players = module.exports = {};


function handleError(err, response, next) {
	response.send(500, err);
	next();
}

function returnPlayer(id, response, next) {
    database.db.collection('players')
        .findOne({
            _id: id
        })
        .then((player) => {
            if (player === null) {
                response.send(404, 'Player not found');
            } else {
                response.json(player);
            }
            next();
        })
        .catch(err => handleError(err, response, next));
}

function getPlayers(request, response, next) {
    database.db.collection('players')
        .find()
        .toArray()
        .then(players => {
            response.json(players || []);
            next();
        })
        .catch(err => handleError(err, response, next));
}

function getPlayer(request, response, next) {
    const id = new mongodb.ObjectID(request.params.id);
    returnPlayer(id, response, next);
}

function updatePlayer(request, response, next) {
    const id = new mongodb.ObjectID(request.params.id);
    const player = request.body;

    if (player === undefined) {
        response.send(400, 'No player data');
        return next();
    }
    delete player._id;
    database.db.collection('players')
        .updateOne({
            _id: id
        }, {
            $set: player
        })
        .then(result => returnPlayer(id, response, next))
        .catch(err => handleError(err, response, next));
}

function createPlayer(request, response, next) {
    const player = request.body;
    if (player === undefined) {
        response.send(400, 'No player data');
        return next();
    }
    database.db.collection('players')
        .insertOne(player)
        .then(result => returnPlayer(result.insertedId, response, next))
        .catch(err => handleError(err, response, next));
}

function deletePlayer(request, response, next) {
    var id = new mongodb.ObjectID(request.params.id);
    database.db.collection('players')
        .deleteOne({
            _id: id
        })
        .then(result => {
            if (result.deletedCount === 1) {
                response.json({
                    msg: util.format('Player -%s- Deleted', id)
                });
            } else {
                response.send(404, 'No player found');
            }
            next();
        })
        .catch(err => handleError(err, response, next));
}

function getTop10(request, response, next) {
    database.db.collection('players')
        .find()
        .sort({totalVictories:-1})
        .limit(10)
        .toArray()
        .then(players => {
            response.json(players || []);
            next();
        })
        .catch(err => handleError(err, response, next));
}

// Routes for the players
players.init = function(server, security, apiBaseUri) {
    server.get(apiBaseUri + 'top10', getTop10);
    server.get(apiBaseUri + 'players', security.authorize, getPlayers);
    server.get(apiBaseUri + 'players/:id', security.authorize, getPlayer);
    server.put(apiBaseUri + 'players/:id', security.authorize, updatePlayer);
    server.post(apiBaseUri + 'players', security.authorize, createPlayer);
    server.del(apiBaseUri + 'players/:id', security.authorize, deletePlayer);
    console.log("Players routes registered");
};  