import { HandlerSettings }                from './handler.settings';
import { databaseConnection as database } from './app.database';

const mongodb = require('mongodb');
const util = require('util');

export class GameRepository {
    private handleError = (err: string, response: any, next: any) => {
        response.send(500, err);
        next();
    }

    private returnGame = (id:string, response: any, next: any) => {
        database.db.collection('games')
            .findOne({
                _id: id
            })
            .then(game => {
                if (game === null) {
                    response.send(404, 'Game not found');
                } else {
                    response.json(game);
                }
                next();
            })
            .catch(err => this.handleError(err, response, next));
    }

    // Vai buscar todos os jogos
    public getGamesN = (request: any, response: any, next: any) => {
        database.db.collection('games')
            .find()
            .toArray()
            .then(games => {
                response.json(games || []);
                next();
            })
            .catch(err => this.handleError(err, response, next));
    }

    // @request Recebe string com status do jogo *inc
    public getGamesByStatusN = (request: any, response: any, next: any) => {
        if (request.params.status === undefined) {
            response.send(400, 'No Status received');
            return next();
        }
        database.db.collection('games')
            .find(
                { status: request.params.status }) 
            .toArray()
            .then(games => {
                response.json(games || []);
                next();
            })
            .catch(err => this.handleError(err, response, next));
    }

    public getGame =  (request: any, response: any, next: any) => {
        const id = new mongodb.ObjectID(request.params.id);

        this.returnGame(id, response, next);
    }

    public updateGame =  (request: any, response: any, next: any) => {
        const id = new mongodb.ObjectID(request.params.id);
        const game = request.body;

        if (game === undefined) {
            response.send(400, 'No game data');
            return next();
        }
        delete game._id;
        database.db.collection('games')
            .updateOne({
                _id: id
            }, {
                $set: game
            })
            .then(result => this.returnGame(id, response, next))
            .catch(err => this.handleError(err, response, next));
    }

    public updateGamePlayersCount =  (request: any, response: any, next: any) => {
        const playersCount = new mongodb.ObjectID(request.params.playersCount);
        const game = request.body;

        if (game === undefined) {
            response.send(400, 'No game data');
            return next();
        }
        delete game.playersCount;
        database.db.collection('games')
            .updateOne({
                playersCount: playersCount
            }, {
                $set: game
            })
            .then(result => this.returnGame(playersCount, response, next))
            .catch(err => this.handleError(err, response, next));
    }

    public updateAllGameN =  (request: any, response: any, next: any) => {
        //console.log('inicio updateAllGameN');
        
        const game = request.body;
        console.log(game);

        if (game === undefined) {
            response.send(400, 'No game data');
            return next();
        }
        database.db.collection('games')
            .updateOne(game)
            .then(result => this.returnGame(result._id, response, next))
            .catch(err => this.handleError(err, response, next));
    }

    public createGameN =  (request: any, response: any, next: any) => {
        const game = request.body;

        if (game === undefined) {
            response.send(400, 'No game data');
            return next();
        }
        database.db.collection('games')
            .insertOne(game)
            .then(result => this.returnGame(result.insertedId, response, next))
            .catch(err => this.handleError(err, response, next));
    }

    public deleteGame =  (request: any, response: any, next: any) => {
        const id = new mongodb.ObjectID(request.params.id);

        database.db.collection('games')
            .deleteOne({
                _id: id
            })
            .then(result => {
                if (result.deletedCount === 1) {
                    response.json({
                        msg: util.format('Game -%s- Deleted', id)
                    });
                } else {
                    response.send(404, 'No game found');
                }
                next();
            })
            .catch(err => this.handleError(err, response, next));
    }

    // Routes for the games
    public init = (server: any, settings: HandlerSettings) => {
        server.post(settings.prefix + 'games', this.createGameN);
        server.get(settings.prefix + 'games', this.getGamesN);
        server.get(settings.prefix + 'gamesSearch/:status', this.getGamesByStatusN);
        server.get(settings.prefix + 'games/:id', settings.security.authorize, this.getGame);
        server.put(settings.prefix + 'games', this.updateGamePlayersCount);
            //server.put(settings.prefix + 'games/:id', this.updateGame);
        server.del(settings.prefix + 'games/:id', settings.security.authorize, this.deleteGame);
        console.log("[node] app.games.ts - Games routes registered");
    };    
}
