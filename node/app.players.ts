const mongodb = require('mongodb');
const util = require('util');
import { HandlerSettings } from './handler.settings';
import { databaseConnection as database } from './app.database';
import { Player } from '../angular/app/_shared';

export class PlayerRepository {
    private settings: HandlerSettings = null;

    private handleError = (err: string, response: any, next: any) => {
        response.send(500, err);
        next();
    }

    public createPlayer = (request: any, response: any, next: any) => {
        if (request.body === undefined) {
            response.send(400, 'No player data');
            return next();
        }
        //console.log(request.body);

        const player = Player.fromBody(request.body);

        //console.log(player);

        database.db.collection('players')
            .insertOne(player)
            .then(result => this.returnPlayer(result.insertedId, response, next))
            .catch(err => this.handleError(err, response, next));
    }

    private returnPlayer = (id:string, response: any, next: any) => {
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
            .catch(err => this.handleError(err, response, next));
    }

    public getPlayers = (request: any, response: any, next: any) => {
        database.db.collection('players')
            .find()
            .toArray()
            .then(players => {
                response.json(players || []);
                next();
            })
            .catch(err => this.handleError(err, response, next));
    }

    public getPlayer =  (request: any, response: any, next: any) => {
        const id = new mongodb.ObjectID(request.params.id);
        this.returnPlayer(id, response, next);
    }  


    public updatePlayer = (request: any, response: any, next: any) => {
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
            .then(result => this.returnPlayer(id, response, next))
            .catch(err => this.handleError(err, response, next));
    }

    public deletePlayer = (request: any, response: any, next: any) => {
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
            .catch(err => this.handleError(err, response, next));
    }

    public getTop10 = (request: any, response: any, next: any) => {
        database.db.collection('players')
            .find()
            .sort({totalVictories:-1})
            .limit(10)
            .toArray()
            .then(players => {
                response.json(players || []);
                this.settings.wsServer.notifyAll('players', Date.now() + ': Somebody accessed top 10');
                next();
            })
            .catch(err => this.handleError(err, response, next));
    }

    // Routes for the games
    public init = (server: any, settings: HandlerSettings) => {
        this.settings = settings;
        server.post(settings.prefix + 'players', this.createPlayer);                // Sem 'authorize' porque user ainda não está registado
        server.get(settings.prefix + 'players', this.getPlayers);
        server.get(settings.prefix + 'top10', this.getTop10);
        server.get(settings.prefix + 'players/:id', settings.security.authorize, this.getPlayer);
        server.put(settings.prefix + 'players/:id', settings.security.authorize, this.updatePlayer);
        server.del(settings.prefix + 'players/:id', settings.security.authorize, this.deletePlayer);
        console.log("[node] app.players.ts - Players routes registered");
    };
 }
