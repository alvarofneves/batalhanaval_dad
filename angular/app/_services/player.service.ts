import { Injectable }                              from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Player }     from '../_shared/index';

import * as io from 'socket.io-client';

@Injectable()
export class PlayerService {
    constructor(private http: Http) { }

    create(player: Player): Observable<any>{
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });

        headers.append("Content-Type", 'application/json');
        
        // NOTE: .map((response: Response) => response.json());      // post() : converte dados para JSON
        return this.http.post('/api/players', player, options).map(r=> r.json());
    }

    getAll() {
        return this.http.get('/api/players').map((response: Response) => response.json());
    }

    // Actualizar lista de jogadores quando há novo registo
    getAllWS(): Observable<Player[]> {
        return this.http.get('/api/players').map((response: Response) => { 
            let players = <Player[]>response.json();
            //console.log(players);
            //return players;
        });
    }

    getById(id: number) {
        return this.http.get('/api/players/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getTopScore() {
        return this.http.get('/api/topscore').map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/players/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods 
    private jwt() {
        // create authorization header with jwt token        
        let currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
        if (currentPlayer && currentPlayer.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentPlayer.token });
            return new RequestOptions({ headers: headers });
        }
    }
}