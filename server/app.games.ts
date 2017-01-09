import { HandlerSettings }                from './handler.settings';
import { databaseConnection as database } from './app.database';

const mongodb = require('mongodb');
const util = require('util');

export class GameRepository {
    private settings: HandlerSettings = null;

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
    public getGames_Node = (request: any, response: any, next: any) => {
        database.db.collection('games')
            .find()
            .toArray()
            .then(games => {
                response.json(games || []);
                this.settings.wsServer.actLists('gamesLists', '');
                next();
            })
            .catch(err => this.handleError(err, response, next));
    }

    // @request Recebe string com status do jogo *inc
    public getGamesByStatus_Node = (request: any, response: any, next: any) => {
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

    public updateGame_Node =  (request: any, response: any, next: any) => {
        const game = request.body;
        
        if (game === undefined) {
            response.send(400, 'No game data');
            return next();
        }
        let idGame = new mongodb.ObjectID(game._id); // PROF caso a rota não tenha o id
        delete game._id;                             // PROF para evitar manipulação do _id
        database.db.collection('games')
            .updateOne({
                _id: idGame 
            }, {
                $set: game 
            })
            .then(result => this.returnGame(result._id, response, next))
            .catch(err => this.handleError(err, response, next));
        //console.log(game);
    }

    public createGame_Node =  (request: any, response: any, next: any) => {
        const game = request.body;

        if (game === undefined) {
            response.send(400, 'No game data');
            return next();
        }
        database.db.collection('games')
            .insertOne(game)
            .then(result => {
                //console.log(this.settings);
                this.settings.wsServer.notifyAll('games', 'New game created');
                this.returnGame(result.insertedId, response, next);
            })
            .catch(err => this.handleError(err, response, next));
    }

    // Criar board com todas posições vazias ('0')
    /*public createBoardEmpty() {
        for(let i = 0; i < 100; i++) {
            this.board[i] = 0;
        }
        return this.board;
    }*/

    public joinGame_Node =  (request: any, response: any, next: any) => {
        const game = request.body;
        
        //console.log(request);
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
        let idGame = new mongodb.ObjectID(game._id); // PROF caso a rota não tenha o id
        delete game._id;                             // PROF para evitar manipulação do _id
        database.db.collection('games')
            .updateOne({
                _id: idGame 
            }, {
                $set: game 
            })
            .then(result => {
                //this.returnGame(result._id, response, next)
                // v find
                const id = new mongodb.ObjectID(idGame);
                this.returnGame(id, response, next);
                })
            .catch(err => this.handleError(err, response, next));
        /*console.log('game - fim ');
        console.log(game);*/
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
        // sem isto -> erro 500
        this.settings = settings;  

        server.post(settings.prefix + 'games', this.createGame_Node);
        server.get(settings.prefix + 'games', this.getGames_Node);
        server.get(settings.prefix + 'gamesSearch/:status', this.getGamesByStatus_Node);
        server.get(settings.prefix + 'games/:id', settings.security.authorize, this.getGame);
        //server.put(settings.prefix + 'games', this.updateGameN);
        server.post(settings.prefix + 'game', this.joinGame_Node);
        server.del(settings.prefix + 'games/:id', settings.security.authorize, this.deleteGame);
        console.log("[node] app.games.ts - Games routes registered");
    };    
}