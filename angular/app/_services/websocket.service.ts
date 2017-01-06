import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import * as io from 'socket.io-client';

@Injectable()
export class WebSocketService {        
    private socket: SocketIOClient.Socket;
    constructor() {
        if (!this.socket) {
            this.socket = io(`http://localhost:7777`);
            //this.socket = io(`http://${window.location.hostname}:${window.location.port}`);
        }
    }

    // Send message to server
    sendChatMessage(message: any) {
        this.socket.emit('chat', message);
    }

    getPlayersMessages(): Observable<any> {
        return this.listenOnChannel('players');
    }

    // Receber mensagens chat dos outros jogadores
    getChatMessages(): Observable<any> {
        return this.listenOnChannel('chat');
    }

    // Envia mensagem quando 1 certo elemento é clicado
    sendClickElementMessage(index: number) {
        this.socket.emit('clickElement', index);
    }

    // recebe mensagens do channel 'board'
    getBoardMessages(): Observable<any> {
        return this.listenOnChannel('board');
    }

    // Receber novos jogos criados
    getNewGamesCreated(): Observable<any> {
        return this.listenOnChannel('games');
    }

    getGamesPendent(): Observable<any> {
        return this.listenOnChannel('gamesLists');
    }

    getGamesProgress(): Observable<any> {
        return this.listenOnChannel('gamesLists');
    }

    getAllPlayers(): Observable<any> {
        return this.listenOnChannel('playersList');
    }

    getAllGames(): Observable<any> {
        return this.listenOnChannel('gamesList');
    }

    // Receive a message from the server
    private listenOnChannel(channel: string): Observable<any> {
        return new Observable((observer:any) => {
            this.socket.on(channel, (data:any) => {
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
    }
}
