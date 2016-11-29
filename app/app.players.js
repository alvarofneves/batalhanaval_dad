const mongodb = require('mongodb');
const database = require('./app.database');
const players = module.exports = {};

function handleError(e, response, next) {
	response.send(500, e);
	return next();
}

function getTop10(request, response, next) {
	database.db.collection('players')
		.find()
		.sort({'totalVictories':-1})
		.limit(10)
		.toArray()
		.then(players => {
			response.json(players || []);
			return next();
		})
		.catch(e => handleError(e, response, next));
}

function getPlayers(request, response, next){
	database.db.collection('players')
		.find()
		.toArray()
		.then(players => {
			response.json(players || []);
			return next();
		})
		.catch(e => handleError(e, response, next));
}

function returnPlayer(id, response, next) {
	database.db.collection('players')
		.findOne({_id: id})
		.then(player => {
			if (player === null) {
				response.send(404, 'Player not found');
				return next();
			}
			response.json(player);
			return next();
		})
		.catch(e => handleError(e, response, next));
}

function getPlayer(request, response, next) {
	const id = new mongodb.ObjectId(request.params.id);
	returnPlayer(id, response, next);
}

function updatePlayer(request, response, next){
	const id = new mongodb.ObjectId(request.params.id);
	const player = request.body;
	delete player._id;
	database.db.collection('players')
		.updateOne({_id: id}, {$set: player})
		.then(result => {
			if (result.modifiedCount !== 1) {
				response.send(404, 'Player not found');
				return next();
			}
			// Alteracao efetuada com sucesso
			returnPlayer(id, response, next);
		})
		.catch(e => handleError(e, response, next));

}

function createPlayer(request, response, next){
	if (!request.body) {
		response.send(400, 'No content');
		return next();
	}
	database.db.collection('players')
		.insertOne(request.body)
		.then(r => {
			if (r.insertedCount === 0) {
				response.send(500, 'Insert failed');
				return next();
			}
			response.json(r.ops[0]);
			return next();
		})
		.catch(e => handleError(e, response, next));
}

function deletePlayer(request, response, next) {
	const id = new mongodb.ObjectId(request.params.id);
	database.db.collection('players')
		.deleteOne({_id:id})
		.then(r => {
			if (r.deletedCount === 0) {
				response.send(404, 'Player not found');
				return next();
			}
			response.json({msg: 'Player -'  + id + '- Deleted'});
			return next();
		})
		.catch(e => handleError(e, response, next));
}

// Routes for the players
// TODO-AS PARA Q SERVE?
players.init = function(server, apiBaseUri){
	server.get(apiBaseUri + 'top10', getTop10);
	server.get(apiBaseUri+'players',getPlayers);
	server.get(apiBaseUri+'players/:id',getPlayer);
	server.put(apiBaseUri+'players/:id',updatePlayer);
	server.post(apiBaseUri+'players',createPlayer);
	server.del(apiBaseUri+'players/:id',deletePlayer);
	console.log("Players routes registered");
};




